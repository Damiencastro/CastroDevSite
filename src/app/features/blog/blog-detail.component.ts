import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  template: `
    <div class="wrap py-16">
      <a routerLink="/blog" class="link mb-4">
        <span aria-hidden="true">←</span> Back to Blog
      </a>
      
      <article class="card p-8">
        <h1 class="mb-4 text-4xl font-bold">
          {{ formatSlug(slug()) }}
        </h1>
        <p class="mb-6 text-sm">Coming Soon</p>
        <p class="text-lg">
          This blog post is currently being written. Check back soon for the full content!
        </p>
      </article>
    </div>
  `
})
export class BlogDetailComponent {
  // Bound from the ':slug' route parameter via withComponentInputBinding().
  readonly slug = input.required<string>();

  formatSlug(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
