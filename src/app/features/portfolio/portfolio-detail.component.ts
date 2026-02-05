import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-6 py-16">
      <a routerLink="/portfolio" class="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Portfolio
      </a>
      
      <div class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Project: {{ slug }}
        </h1>
        <p class="text-gray-600 text-lg">
          Project details coming soon. This page will display comprehensive information 
          about the {{ slug }} project including tech stack, challenges, and outcomes.
        </p>
      </div>
    </div>
  `
})
export class PortfolioDetailComponent {
  private route = inject(ActivatedRoute);
  slug: string = '';

  constructor() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'] || 'Unknown';
    });
  }
}
