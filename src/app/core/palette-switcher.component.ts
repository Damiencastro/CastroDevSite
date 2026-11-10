import { Component, signal } from '@angular/core';
import { PALETTES, Palette } from './palettes.js';

const STORAGE_KEY = 'palette-preview';

/**
 * Development-only palette picker. Sets data-palette on <html> so palettes
 * can be compared live; the choice is remembered in this browser only.
 * The palette visitors get is the data-palette attribute in src/index.html.
 */
@Component({
  selector: 'app-palette-switcher',
  template: `
    <div class="card fixed right-4 bottom-4 z-50 flex items-center gap-1 p-2 text-sm shadow-lg">
      <span class="px-2 text-ink-muted">Palette</span>
      @for (palette of palettes; track palette) {
        <button
          type="button"
          class="rounded-lg px-3 py-1 capitalize transition-colors"
          [class]="palette === current() ? 'bg-accent text-on-accent' : 'text-ink hover:bg-surface-muted'"
          [attr.aria-pressed]="palette === current()"
          (click)="select(palette)"
        >
          {{ palette }}
        </button>
      }
    </div>
  `
})
export class PaletteSwitcherComponent {
  readonly palettes = PALETTES;
  readonly current = signal<Palette>(this.initial());

  constructor() {
    document.documentElement.dataset['palette'] = this.current();
  }

  select(palette: Palette): void {
    this.current.set(palette);
    document.documentElement.dataset['palette'] = palette;
    try {
      localStorage.setItem(STORAGE_KEY, palette);
    } catch {
      // Storage unavailable (private window etc.) - the choice just won't persist.
    }
  }

  private initial(): Palette {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Fall through to the palette set in index.html.
    }
    const candidate = stored ?? document.documentElement.dataset['palette'];
    return PALETTES.find((p) => p === candidate) ?? PALETTES[0];
  }
}
