import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.js';

import { routes } from './app.routes.js';


export const appConfig: ApplicationConfig = {
  providers: [
    // Sets up the application's routes.
    provideRouter(routes, withComponentInputBinding()),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ]
};
