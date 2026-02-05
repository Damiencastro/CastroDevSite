import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-gray-600 text-lg">
          This page is under construction. Check back soon for more information about Damien Castro.
        </p>
      </div>
    </div>
  `
})
export class AboutComponent { }
