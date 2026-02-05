import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes.js').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.routes.js').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./features/portfolio/portfolio.routes.js').then((m) => m.PORTFOLIO_ROUTES),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.routes.js').then((m) => m.BLOG_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.routes.js').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./features/resume/resume.routes.js').then((m) => m.RESUME_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];