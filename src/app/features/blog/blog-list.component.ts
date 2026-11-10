import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink],
  template: `
    <div class="wrap py-16">
      <h1 class="page-title">Blog</h1>
      <div class="card p-8">
        <p class="mb-6 text-lg">
          This page is under construction. Blog posts coming soon!
        </p>
        
        <!-- Placeholder blog cards -->
        <div class="space-y-6">
          <div class="border-b border-line pb-6">
            <h2 class="text-xl font-semibold mb-2">RHCSA Certification Journey</h2>
            <p class="mb-2 text-sm">Coming Soon</p>
            <p class="mb-4">
              My experience studying for and passing the Red Hat Certified System Administrator exam.
            </p>
            <a routerLink="/blog/rhcsa-journey" class="link">Read More <span aria-hidden="true">→</span></a>
          </div>
          
          <div class="border-b border-line pb-6">
            <h2 class="text-xl font-semibold mb-2">MobiNav Technical Deep-Dive</h2>
            <p class="mb-2 text-sm">Coming Soon</p>
            <p class="mb-4">
              A comprehensive look at building an accessibility-focused navigation application.
            </p>
            <a routerLink="/blog/mobinav-deep-dive" class="link">Read More <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BlogListComponent { }
