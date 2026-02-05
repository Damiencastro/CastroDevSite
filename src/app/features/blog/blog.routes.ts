import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component.js';
import { BlogDetailComponent } from './blog-detail.component.js';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path: ':slug',
    component: BlogDetailComponent,
  },
];
