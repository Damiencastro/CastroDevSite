import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // You can add properties here to bind to your template.
  // For example, fetching your bio or featured projects from the FirebaseService.

  constructor() { }
}
