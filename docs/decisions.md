# Decisions

A log of the significant technical choices in this project and the reasoning behind each.

Entries are in the order the decisions were made. An entry is not rewritten when a decision changes; its status is updated and a new entry is added. For what the code looks like today, see [architecture.md](architecture.md) and [operations.md](operations.md).

Each entry has a status:

- **Active:** in effect.
- **Under review:** in effect, but a change has been proposed.
- **Planned:** decided, but not yet built.

## 1. Angular as the framework

**Date:** 2025-06-28 · **Status:** Active

**Context.** The site needed a front-end framework. Angular was the one I already had working experience with.

**Decision.** Build the site as an Angular application.

**Consequences.** Development was quick to start, because there was no new framework to learn. Angular is a heavier tool than a mostly static personal site strictly needs, and it produces a client-rendered app by default (see decision 3). The choice rests on familiarity, not on a comparison of options, so it is open to revisiting if the site's needs change.

## 2. Firebase for hosting and data

**Date:** 2025-06-28 · **Status:** Active

**Context.** The site needed somewhere to be hosted and, eventually, somewhere to keep blog posts and project entries. As with Angular, I had used Firebase before, and AngularFire connects the two.

**Decision.** Host on Firebase Hosting, and use Cloud Firestore as the database, under a single Firebase project.

**Consequences.** Hosting, HTTPS, preview URLs, and a database come from one provider with no server to run. The site is tied to Google's platform and its client SDK. Because the browser talks to Firestore directly, the Firestore security rules are the only access control on the data.

## 3. Client-side rendering only

**Date:** 2025-06-28 · **Status:** Active

**Context.** Angular can render pages in the browser, on a server, or ahead of time at build. Browser rendering was the default when the project was generated, and it has not been changed since.

**Decision.** Serve a static bundle and render every page in the browser. No server-side rendering or prerendering.

**Consequences.** Hosting stays simple: static files and one rewrite rule. The served HTML contains no page content, which limits what search engines and link previews can see, and every route shares one page title. This was a default, not a considered choice, so it is open to re-examination.

## 4. Feature folders with lazy-loaded routes

**Date:** 2025-06-28 · **Status:** Active

**Context.** The site has a handful of distinct pages that share a shell. I had used this folder structure on earlier Angular projects.

**Decision.** Give each page its own folder under `src/app/features/`, with its own routes file that the top-level router loads on demand. Shared code goes in `src/app/core/`.

**Consequences.** Each page is a separate download, fetched when first visited. Adding a page means adding a folder and one route entry. For a site this small the performance benefit is slight; the main value is that every page is laid out the same way.

## 5. Deploy through GitHub Actions, with a preview for every pull request

**Date:** 2025-06-28 · **Status:** Active

**Context.** The Firebase CLI offers to set up GitHub deployment when hosting is initialised. It generates two workflows and a service account for them to use.

**Decision.** Accept the generated setup. A pull request deploys to a temporary preview channel, and a push to `main` deploys to the live site.

**Consequences.** Deploying needs no manual step, and every change can be seen on a real URL before it is merged. The pipeline was generated, not designed, so several of its defaults had never been reviewed. That review is recorded in [security-audit.md](security-audit.md).

## 6. Tailwind CSS for styling

**Date:** 2026-02-03 · **Status:** Active

**Context.** The project was first generated with SCSS, which put a separate stylesheet beside every component. I had never used SCSS and wanted fewer files. I had a little exposure to Tailwind from an earlier team project, where a teammate handled most of it.

**Decision.** Style the site with Tailwind utility classes and remove the SCSS files.

**Consequences.** Styling lives in the templates, and components have no stylesheets of their own. Getting Tailwind 4 working with the Angular build took several attempts between February and March 2026, ending with a file naming fix.

## 7. Firebase web config kept in GitHub secrets

**Date:** 2026-02-05 · **Status:** Under review

**Context.** The app needs the Firebase web config, which includes an API key, at build time. Leaked API keys are a well-known way to run up large bills, so I treated every piece of configuration as sensitive and kept all of it out of the repository.

**Decision.** Commit only a placeholder `environment.ts`. Store the real values as six GitHub secrets, and have the workflows generate `environment.production.ts` during the build.

**Consequences.** No Firebase values appear in the repository. The values are not actually secret, since they ship to every visitor in the JavaScript bundle. The approach adds a generated file and a CI step, and local development runs against placeholder values. In hindsight this is more cautious than these particular values need. Finding 11 in [security-audit.md](security-audit.md) proposes committing the config and keeping only truly sensitive material, such as the deploy key, in secrets.

## 8. Zoneless change detection

**Date:** 2026-11-09 · **Status:** Active

**Context.** During a dependency clean-up from Angular 20 to 22, `zone.js` was one of several packages the app no longer needed. Current Angular no longer requires it.

**Decision.** Remove `zone.js` and its polyfill, and run the app zoneless.

**Consequences.** One less dependency and a smaller bundle. Component state must be held in signals, or otherwise tell Angular when it changes, for the view to update.

## 9. Vitest in place of Karma and Jasmine

**Date:** 2026-11-09 · **Status:** Active

**Context.** The project was generated with Karma and Jasmine, which run tests in a real browser. The same clean-up as decision 8 moved the project to current Angular defaults.

**Decision.** Run unit tests with Angular's Vitest test builder in jsdom.

**Consequences.** Tests run without a browser installed, which suits both local use and CI. jsdom is a simulation, so behaviour that depends on a real browser's layout cannot be tested this way.

## 10. Semantic colour tokens and swappable palettes

**Date:** 2026-11-09 · **Status:** Active

**Context.** Templates used Tailwind's built-in colours directly, such as `gray-800` and `blue-600`, so changing the site's look meant editing every template. The final colour scheme had not been settled.

**Decision.** Define every colour as a named token, such as `page`, `ink`, and `accent`, set per palette in one CSS file. Select the palette with one attribute on `<html>`. Provide four palettes and a development-only switcher for comparing them.

**Consequences.** Changing the site's colours is a one-line edit. Templates must use the token names instead of Tailwind's built-in colours, or that part of the page will not follow the palette. The live palette is `midnight`.

## 11. Blog and portfolio content in Firestore

**Date:** 2025-06-28 · **Status:** Planned

**Context.** Blog posts and project entries will change more often than the rest of the site. The initial commit included a service that reads both from Firestore. The plan was reconfirmed on 2026-11-11: Firebase is already configured and the service already exists, so moving to anything else would mean a larger rework.

**Decision.** Store blog posts and projects as Firestore documents and read them from the browser.

**Consequences.** Not yet built: the service exists, but every page still shows placeholder content. When built, content can change without a deploy. It will require Firestore rules that allow public reads, and content will not be visible to crawlers that do not run JavaScript (see decision 3).

## 12. Documentation lives in the repository, on `main`

**Date:** 2026-11-11 · **Status:** Active

**Context.** The project had only a generated README. A separate documentation-only branch was considered.

**Decision.** Keep documentation as Markdown files under `docs/` on `main`, changed through pull requests like code.

**Consequences.** A change to the code and the matching change to its documentation can go in the same commit, and the documentation is present in every checkout. Documentation-only changes currently trigger a deploy.
