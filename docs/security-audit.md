# Security audit

A review of the build, deploy, and hosting configuration described in [operations.md](operations.md), with a recommended change for each finding.

Audited on 2026-11-11. Fixes are to be made on a dedicated `security_fix` branch.

## Summary

Nothing found is an active leak or breach. A scan of the full git history found no API keys or private keys, and the database denies anonymous access. The findings are hardening gaps: places where the setup relies on defaults or on nobody making a mistake.

| # | Finding | Priority | Status |
| --- | --- | --- | --- |
| 1 | `main` is unprotected and every push deploys | High | Open |
| 2 | Deploy key is handed to an action pinned to a movable tag | High | Open |
| 3 | Deploy credential is a long-lived key with unreviewed roles | High | Open |
| 4 | Firestore rules are not version controlled | High | Open |
| 5 | Merge workflow does not declare token permissions | Medium | Open |
| 6 | No tests or dependency checks in CI, and Dependabot is off | Medium | Open |
| 7 | No security response headers | Medium | Open |
| 8 | Pull request previews use the production backend | Medium | Open |
| 9 | Secrets are interpolated directly into a shell script | Medium | Open |
| 10 | API key restrictions and App Check are unverified | Medium | Open |
| 11 | Public config is stored as secrets | Low | Open |
| 12 | Dependency advisories and a pre-release dependency | Low | Open |
| 13 | Deploys are not serialized, and docs changes deploy | Low | Open |
| 14 | Leftover `.gitignore` entry | Low | Open |

## High priority

### 1. `main` is unprotected and every push deploys

`main` has no branch protection and no rulesets. Any push to it, including a force push, goes to production with no review and no required check. The only barrier is who holds push access to the repository.

**Fix:** add a ruleset on `main` that requires a pull request, requires the build check to pass, and blocks force pushes.

### 2. Deploy key is handed to an action pinned to a movable tag

`FirebaseExtended/action-hosting-deploy@v0` receives the service account key. `@v0` is a tag the action's maintainers can repoint at any time, so a compromise of that repository would run attacker code with the key. The same applies, with less at stake, to `actions/checkout@v4` and `actions/setup-node@v4`.

**Fix:** pin each action to a full commit SHA, with the version in a trailing comment. Dependabot can keep the pins current.

### 3. Deploy credential is a long-lived key with unreviewed roles

A service account JSON key never expires. The roles on the account were assigned automatically by the Firebase CLI and have not been reviewed.

**Fix:** check the account's roles in Google Cloud IAM and remove anything beyond what a Hosting deploy needs. Longer term, replace the key with Workload Identity Federation, which lets GitHub Actions authenticate with short-lived tokens and no stored key.

### 4. Firestore rules are not version controlled

The rules are the real access control for the database, yet they can be changed in the console with no history, no review, and no record in the repository.

**Fix:** add `firestore.rules` to the repository and reference it from `firebase.json`. Grant public read on `blogPosts` and `projects` only, and deny all writes. No page reads Firestore yet, so nothing is broken today, but the read rule must be in place before the blog and portfolio pages can load content from it.

## Medium priority

### 5. Merge workflow does not declare token permissions

The PR workflow limits `GITHUB_TOKEN`. The merge workflow does not, so it gets the repository default, which may be read and write on everything.

**Fix:** add a `permissions:` block granting `contents: read` and `checks: write`.

### 6. No tests or dependency checks in CI, and Dependabot is off

A failing test does not block a deploy. Dependabot alerts are disabled and there is no `dependabot.yml`, so vulnerable dependencies go unreported.

**Fix:** run `ng test` before the build step. Enable Dependabot alerts and security updates, and add a `dependabot.yml` covering `npm` and `github-actions`.

### 7. No security response headers

The site sends no `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, or `Referrer-Policy`.

**Fix:** add a `headers` section to `firebase.json`. A CSP for an Angular and Firebase app needs some care, so start with the three simple headers and add the CSP separately.

### 8. Pull request previews use the production backend

Previews are built with the production web config, so preview sites point at the live Firestore. No page uses Firestore yet, and the service only defines reads, so this is low risk. It becomes a real problem if the app ever writes data.

**Fix:** accept for now and revisit before adding any write path. The usual solution is a second Firebase project for previews.

### 9. Secrets are interpolated directly into a shell script

The environment file step puts `${{ secrets.* }}` inside a `run:` block and an unquoted heredoc. GitHub substitutes the values into the script text before the shell runs, so a value containing `$`, a backtick, or a quote would be interpreted by the shell. The values are under the repository owner's control, so the practical risk is small, but this is the pattern GitHub's hardening guide warns against.

**Fix:** pass the values through `env:` and write the file from environment variables. Finding 11 removes the step altogether.

### 10. API key restrictions and App Check are unverified

The web API key may be unrestricted, which would let it be used from any site and against any enabled Google API on the project. App Check is not configured in the app.

**Fix:** in Google Cloud console → APIs & Services → Credentials, restrict the key to the site's domains and to the APIs the app uses. Consider App Check once the site has content worth protecting.

## Low priority

### 11. Public config is stored as secrets

The six Firebase web config values are public, because they ship in the JavaScript bundle. Treating them as secrets adds a generated file, a fragile CI step, and a local development setup that does not work out of the box.

**Fix:** commit the real web config in `environment.ts` and delete the generation step, as Firebase's own documentation does. Do this only after findings 4 and 10, since those are the controls that make the config safe to publish.

### 12. Dependency advisories and a pre-release dependency

`npm audit` reports five high-severity advisories, all from `@grpc/grpc-js`, which is pulled in through the Firebase SDK. That package is used on Node, not in the browser bundle, so exposure on this site is minimal. The only offered fix is a downgrade to `@angular/fire` 7.

Separately, `@angular/fire` is pinned to a release candidate, `^22.0.0-rc.0`.

**Fix:** no action on the advisories beyond watching for an upstream fix. Move `@angular/fire` to the stable release when it ships.

### 13. Deploys are not serialized, and docs changes deploy

Two quick pushes to `main` run two deploys in parallel, and the older one can finish last. Markdown-only changes also trigger a full deploy.

**Fix:** add a `concurrency:` group to the merge workflow, and a `paths-ignore` for `docs/**` and `*.md`.

### 14. Leftover `.gitignore` entry

`.gitignore` lists `src/environments/environment.development.ts`, which nothing references.

**Fix:** remove the entry, or start using the file as part of finding 11.

## Suggested order

1. Findings 1, 2, and 5 are small workflow and settings changes with no dependencies.
2. Finding 4 comes next, because the blog and portfolio pages will depend on it once they read from Firestore.
3. Findings 3 and 10 need console access to review roles and key restrictions.
4. Finding 11 follows 4 and 10, and removes 9 and 14 along the way.
5. Findings 6, 7, and 13 can be done at any point.
6. Findings 8 and 12 need no change now.
