# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal website for Damien Castro. An Angular 22 single-page app styled with Tailwind 4, hosted on Firebase Hosting. Most pages are placeholders; Firestore is configured but no page reads from it yet.

Read these before making non-trivial changes:

- `docs/architecture.md`: code layout, routes, styling system, data layer
- `docs/operations.md`: build, deploy pipeline, secrets, Firebase setup
- `docs/decisions.md`: why things are the way they are
- `docs/security-audit.md`: known gaps in the deploy setup and their planned fixes

## Commands

- `npm start`: dev server on `http://localhost:4200`
- `npx ng test --watch=false`: run unit tests once, without watch mode
- `npm run build`: production build. Needs `src/environments/environment.production.ts`, which is gitignored; copy `environment.ts` to create it.

Node 24 is required.

## Code conventions

- One folder per page under `src/app/features/<name>/`, with a `<name>.routes.ts` that `app.routes.ts` lazy-loads. Shared code goes in `src/app/core/`.
- Standalone components with inline templates. Use a separate `.html` file only when a template is long. No per-component stylesheets.
- The app is zoneless. Hold component state in signals.
- Route parameters bind to component inputs (`input.required<string>()`), not `ActivatedRoute`.
- Relative imports end in `.js`.
- Use the palette colour utilities (`bg-page`, `text-ink`, `bg-accent`, `border-line`, and the rest listed in `src/styles.css`). Never use Tailwind's built-in colours such as `gray-800`, or the page will not follow the palette.
- Prefer the shared classes in `src/styles.css` (`.wrap`, `.card`, `.btn`, `.link`, `.chip`, `.field`) over repeating utility strings.
- A new palette must be added in both `src/styles/palettes.css` and `src/app/core/palettes.ts`.

## Workflow

- Never push to `main`. Every push to `main` deploys to production. Create a branch from an up-to-date `main`, push it, and open a pull request. Damien merges.
- Opening a pull request deploys a preview site, including for documentation-only changes.
- Show drafts of documentation for review before committing them.
- The deploy workflows and `firebase.json` have open security findings. Check `docs/security-audit.md` before changing them, and update a finding's status when it is fixed.

## Documentation conventions

- `architecture.md` and `operations.md` describe the current state only. Update them in the same pull request as the change they describe.
- Proposed changes and future work do not go in those two files. Security fixes go in `security-audit.md`.
- `decisions.md` is a log. Do not rewrite an old entry; change its status and add a new entry.
