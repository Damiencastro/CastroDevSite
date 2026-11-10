# Castro.dev

Personal website for Castro.dev, built with [Angular](https://angular.dev) 22 (zoneless), [Tailwind CSS](https://tailwindcss.com) 4 and [AngularFire](https://github.com/angular/angularfire), and deployed to Firebase Hosting.

Requires Node.js 24 (or 22.22.3+).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

The production build reads the Firebase configuration from `src/environments/environment.production.ts`, which is not committed (the deploy workflows generate it from repository secrets). To build locally, copy `src/environments/environment.ts` to that path and fill in your values. `ng serve` and development builds use `src/environments/environment.ts` directly.

## Running unit tests

To execute unit tests with [Vitest](https://vitest.dev) (running in jsdom, so no browser is needed), use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
