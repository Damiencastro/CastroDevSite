import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import RouterOutlet to enable routing within the application.
  imports: [RouterOutlet],
  // The template will contain the main router outlet where feature components are rendered.
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'castrodev-portfolio';
}
