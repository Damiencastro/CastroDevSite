import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  imports: [RouterLink],
  template: `
    <div class="wrap py-16">
      <a routerLink="/portfolio" class="link mb-4">
        <span aria-hidden="true">←</span> Back to Portfolio
      </a>
      
      <div class="card p-8">
        <h1 class="mb-4 text-4xl font-bold">
          Project: {{ slug() }}
        </h1>
        <p class="text-lg">
          Project details coming soon. This page will display comprehensive information 
          about the {{ slug() }} project including tech stack, challenges, and outcomes.
        </p>
      </div>
    </div>
  `
})
export class PortfolioDetailComponent {
  // Bound from the ':slug' route parameter via withComponentInputBinding().
  readonly slug = input.required<string>();
}
