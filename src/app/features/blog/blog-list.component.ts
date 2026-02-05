import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-gray-600 text-lg mb-6">
          This page is under construction. Blog posts coming soon!
        </p>
        
        <!-- Placeholder blog cards -->
        <div class="space-y-6">
          <div class="border-b border-gray-200 pb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">RHCSA Certification Journey</h2>
            <p class="text-gray-500 text-sm mb-2">Coming Soon</p>
            <p class="text-gray-600 mb-4">
              My experience studying for and passing the Red Hat Certified System Administrator exam.
            </p>
            <a routerLink="/blog/rhcsa-journey" class="text-blue-600 hover:underline">Read More →</a>
          </div>
          
          <div class="border-b border-gray-200 pb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">MobiNav Technical Deep-Dive</h2>
            <p class="text-gray-500 text-sm mb-2">Coming Soon</p>
            <p class="text-gray-600 mb-4">
              A comprehensive look at building an accessibility-focused navigation application.
            </p>
            <a routerLink="/blog/mobinav-deep-dive" class="text-blue-600 hover:underline">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BlogListComponent { }
