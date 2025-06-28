import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // The default route, redirects to the home page.
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    // Lazy loads the Home feature. The code for this feature
    // will only be downloaded when the user navigates to '/home'.
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes.js').then((m) => m.HOME_ROUTES),
  },
  // {
  //   // Placeholder for the Blog feature. Uncomment when ready.
  //   path: 'blog',
  //   loadChildren: () =>
  //     import('./features/blog/blog.routes').then((m) => m.BLOG_ROUTES),
  // },
  // {
  //   // Placeholder for the Portfolio feature. Uncomment when ready.
  //   path: 'portfolio',
  //   loadChildren: () =>
  //     import('./features/portfolio/portfolio.routes').then((m) => m.PORTFOLIO_ROUTES),
  // },
  {
    // Wildcard route for a 404 page.
    // Consider creating a dedicated 'NotFound' component for this.
    path: '**',
    redirectTo: 'home', // Or redirect to a custom 404 page
  },
];
