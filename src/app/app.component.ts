import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Castro.dev';
  currentYear = new Date().getFullYear();
}
