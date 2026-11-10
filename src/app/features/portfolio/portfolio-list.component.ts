import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  imports: [RouterLink],
  template: `
    <div class="wrap py-16">
      <h1 class="page-title">Portfolio</h1>
      <div class="card p-8">
        <p class="mb-6 text-lg">
          This page is under construction. Projects coming soon!
        </p>
        
        <!-- Placeholder project cards -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-lg border border-line p-6 transition-shadow hover:shadow-md">
            <h2 class="text-xl font-semibold mb-2">MIDAS</h2>
            <p class="mb-4">Accounting software built with Angular and Firebase</p>
            <a routerLink="/portfolio/midas" class="link">View Project <span aria-hidden="true">→</span></a>
          </div>
          
          <div class="rounded-lg border border-line p-6 transition-shadow hover:shadow-md">
            <h2 class="text-xl font-semibold mb-2">MobiNav</h2>
            <p class="mb-4">Accessibility-focused campus navigation tool</p>
            <a routerLink="/portfolio/mobinav" class="link">View Project <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PortfolioListComponent { }
