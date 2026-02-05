import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Portfolio</h1>
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-gray-600 text-lg mb-6">
          This page is under construction. Projects coming soon!
        </p>
        
        <!-- Placeholder project cards -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">MIDAS</h2>
            <p class="text-gray-600 mb-4">Accounting software built with Angular and Firebase</p>
            <a routerLink="/portfolio/midas" class="text-blue-600 hover:underline">View Project →</a>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">MobiNav</h2>
            <p class="text-gray-600 mb-4">Accessibility-focused campus navigation tool</p>
            <a routerLink="/portfolio/mobinav" class="text-blue-600 hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PortfolioListComponent { }
