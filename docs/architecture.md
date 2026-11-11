# Architecture

How the application is put together today, and where each kind of code lives.

This document describes the current state only. How the site is built and deployed is covered in [operations.md](operations.md).

Last verified against the repository on 2026-11-11.

## Overview

The site is a single-page application. The browser downloads a static bundle from Firebase Hosting, and Angular renders every page on the client. There is no server-side code and no server-side rendering.

All content is currently written directly into the page components. Cloud Firestore is configured as a future content source but is not yet used.

## Stack

- **Angular 22** provides the framework. The app uses standalone components, signals for state, and zoneless change detection, so `zone.js` is not a dependency.
- **Tailwind CSS 4** provides styling, loaded through PostCSS and configured in CSS, with no `tailwind.config.js`.
- **AngularFire** connects the app to Firebase. Only the Firestore provider is registered.
- **Vitest** runs unit tests in jsdom through `ng test`.
- **TypeScript 6** in strict mode, with strict Angular templates.

## Code layout

```
src/
├── index.html               Sets the live colour palette
├── main.ts                  Bootstraps AppComponent
├── styles.css               Tailwind theme and shared classes
├── styles/palettes.css      Colour palettes
├── environments/            Firebase config (see operations.md)
└── app/
    ├── app.config.ts        Providers: router and Firebase
    ├── app.routes.ts        Top-level routes
    ├── app.component.*      Shell: header, navigation, footer
    ├── core/                Code shared across pages
    │   ├── palettes.ts
    │   ├── palette-switcher.component.ts
    │   └── services/firebase.service.ts
    └── features/            One folder per page
        ├── home/
        ├── about/
        ├── portfolio/
        ├── blog/
        ├── resume/
        └── contact/
```

Static files in `public/` are copied to the site root. It holds only the favicon.

### Conventions

- **Each feature owns its routes.** A feature folder has a `<name>.routes.ts` file exporting a route array, which `app.routes.ts` lazy-loads. Each page is therefore its own JavaScript chunk, downloaded on first visit.
- **Templates are inline** in the component file. The two exceptions are the app shell and the home page, which are long enough to have their own `.html` files.
- **Components have no per-component stylesheets.** All styling comes from Tailwind classes and the shared classes in `styles.css`.
- **Route parameters arrive as inputs.** `withComponentInputBinding()` is enabled, so a `:slug` route parameter binds to a component's `slug` input with no `ActivatedRoute` code.
- **Relative imports end in `.js`**, as in `./app.routes.js`, even though the files are TypeScript.

## Routes

The shell in `app.component` renders the header, navigation, and footer around a router outlet. The navigation links are a list in `app.component.ts`.

| Route | Page | Current state |
| --- | --- | --- |
| `/` | | Redirects to `/home` |
| `/home` | Landing page | Built. Featured projects and recent posts come from placeholder arrays in the component. |
| `/about` | About | "Under construction" notice |
| `/portfolio` | Project list | Two placeholder cards |
| `/portfolio/:slug` | Project detail | Placeholder that displays the slug |
| `/blog` | Post list | Two placeholder cards |
| `/blog/:slug` | Post detail | Placeholder that displays the slug as a title |
| `/resume` | Resume | Content written into the template. The PDF download button is disabled. |
| `/contact` | Contact | Contact details are live. The form is disabled. |
| Anything else | | Redirects to `/home` |

## Styling

Colour is handled in three layers, so that changing one palette restyles the whole site.

1. **Palettes** in [palettes.css](../src/styles/palettes.css). A palette is a block of eleven CSS variables, such as `--page`, `--ink`, and `--accent`, selected by the `data-palette` attribute on `<html>`. Six further variables, such as hover and muted shades, are derived from those with `color-mix()`. There are four palettes: `slate`, `forest`, `plum`, and `midnight`.
2. **Tailwind theme** in [styles.css](../src/styles.css). The variables are exposed as Tailwind colours, giving utilities such as `bg-page`, `text-ink`, and `bg-accent`. Templates use these instead of Tailwind's built-in colours.
3. **Shared classes**, also in `styles.css`. Classes such as `.wrap`, `.card`, `.btn`, `.link`, and `.chip` give every page the same shapes.

The palette visitors see is the `data-palette` value in [index.html](../src/index.html), currently `midnight`.

A palette switcher appears in the bottom-right corner under `ng serve`. It is excluded from production builds by an `isDevMode()` check, and it remembers its choice in the browser's local storage. Its list of names in `core/palettes.ts` is maintained by hand and must match the blocks in `palettes.css`.

The comment at the top of `palettes.css` documents each token and how to add a palette.

## Data

`app.config.ts` initialises Firebase and registers Firestore. [firebase.service.ts](../src/app/core/services/firebase.service.ts) defines two models and three read methods:

| Collection | Model | Fields | Methods |
| --- | --- | --- | --- |
| `blogPosts` | `BlogPost` | `id`, `title`, `content`, `publishedDate` | `getBlogPosts()`, `getBlogPostById(id)` |
| `projects` | `Project` | `id`, `name`, `description`, `imageUrl`, `projectUrl`, `sourceUrl` | `getProjects()` |

No component injects this service. Every page renders content from its own template or, on the home page, from arrays in the component class.

The service and the pages do not yet line up:

- Detail routes identify an item by `:slug`, while the service looks items up by document `id`. Neither model has a `slug` field.
- The home page's placeholder items carry fields the models lack, such as `tagline`, `techStack`, `excerpt`, `tags`, and `readingTime`.
- There is no method for fetching a single project.

## Testing

There is one spec file, [app.component.spec.ts](../src/app/app.component.spec.ts), with five tests covering the shell: creation, title, footer year, brand name, and navigation links. No feature component or service has tests.

## Constraints

These follow from the design as it stands:

- **Content needs JavaScript.** The HTML that Hosting serves is an empty shell, so crawlers and link previews that do not run JavaScript see no page content.
- **Every page shares one title.** The browser tab reads "Castro.dev" on all routes, because no route sets its own title or meta tags.
- **There is no "not found" page.** Unknown URLs redirect to `/home`, and unknown slugs under `/blog` and `/portfolio` render a placeholder page.
- **Changing content means deploying.** All text lives in component templates.
- **Firebase loads everywhere.** It is initialised at startup, so the Firebase SDK is part of the initial download although nothing uses it.
