import { Routes } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list.component.js';
import { PortfolioDetailComponent } from './portfolio-detail.component.js';

export const PORTFOLIO_ROUTES: Routes = [
  {
    path: '',
    component: PortfolioListComponent,
  },
  {
    path: ':slug',
    component: PortfolioDetailComponent,
  },
];
