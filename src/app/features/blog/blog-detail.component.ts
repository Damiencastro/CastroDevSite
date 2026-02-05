import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto px-6 py-16">
      <a routerLink="/blog" class="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </a>
      
      <article class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ formatSlug(slug) }}
        </h1>
        <p class="text-gray-500 text-sm mb-6">Coming Soon</p>
        <p class="text-gray-600 text-lg">
          This blog post is currently being written. Check back soon for the full content!
        </p>
      </article>
    </div>
  `
})
export class BlogDetailComponent {
  private route = inject(ActivatedRoute);
  slug: string = '';

  constructor() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'] || 'Unknown';
    });
  }

  formatSlug(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
