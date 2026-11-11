# Castro.dev

The personal website of Damien Castro, software engineer. It presents my projects, writing, and resume.

**Live site:** <https://damiencastro.dev>

## Status

The site is a work in progress. The app shell, navigation, home page, resume, and colour system are built. The about, portfolio, and blog pages hold placeholder content, and the contact form is not yet active. The [route table](docs/architecture.md#routes) lists the state of every page.

## Stack

- [Angular](https://angular.dev) 22, using standalone components, signals, and zoneless change detection
- [Tailwind CSS](https://tailwindcss.com) 4, with a set of swappable colour palettes
- [Firebase](https://firebase.google.com) Hosting, with Cloud Firestore configured as the future content store
- [Vitest](https://vitest.dev) for unit tests
- GitHub Actions for deployment, with a preview site for every pull request

## Getting started

You need Node.js 24, or 22.22.3 and later.

Install dependencies:

```bash
npm ci
```

Start the development server at `http://localhost:4200`:

```bash
npm start
```

Run the unit tests:

```bash
npm test
```

Create a production build in `dist/`:

```bash
npm run build
```

The production build needs a file that is not in the repository. Copy `src/environments/environment.ts` to `src/environments/environment.production.ts` first. The details are in [operations.md](docs/operations.md#local-development).

## Deployment

Opening a pull request deploys the branch to a temporary preview URL. Merging to `main` deploys to the live site. Both are handled by GitHub Actions and described in [operations.md](docs/operations.md).

## Documentation

| Document | What it covers |
| --- | --- |
| [Architecture](docs/architecture.md) | How the app is structured: code layout, routes, styling, and data |
| [Operations](docs/operations.md) | How the site is built, deployed, and configured, and how to roll back |
| [Decisions](docs/decisions.md) | The significant technical choices and the reasoning behind each |
| [Security audit](docs/security-audit.md) | A review of the deploy and hosting setup, with planned fixes |
