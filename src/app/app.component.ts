import { Component, isDevMode, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PaletteSwitcherComponent } from './core/palette-switcher.component.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, PaletteSwitcherComponent],
  templateUrl: './app.component.html',
  host: { class: 'flex min-h-screen flex-col' }
})
export class AppComponent {
  title = 'Castro.dev';
  currentYear = new Date().getFullYear();

  readonly navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  readonly menuOpen = signal(false);

  // The palette picker is a design aid; it is left out of production builds.
  readonly showPaletteSwitcher = isDevMode();
}
