import { Routes } from '@angular/router';
import { HomeComponent } from './home.component.js';

// These routes are relative to the path defined in app.routes.ts ('/home').
export const HOME_ROUTES: Routes = [
  {
    // The default path for this feature ('/home') will render the HomeComponent.
    path: '',
    component: HomeComponent,
  },
];
