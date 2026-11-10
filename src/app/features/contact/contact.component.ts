import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="wrap py-16">
      <h1 class="page-title">Contact Me</h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Form Placeholder -->
        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6">Send a Message</h2>
          <p class="mb-6">
            Contact form coming soon. In the meantime, feel free to reach out via email or LinkedIn.
          </p>
          
          <!-- Placeholder form (non-functional) -->
          <form class="space-y-4">
            <div>
              <label for="contact-name" class="mb-2 block font-medium text-ink">Name</label>
              <input 
                id="contact-name"
                type="text" 
                disabled
                placeholder="Your name"
                class="field"
              >
            </div>
            <div>
              <label for="contact-email" class="mb-2 block font-medium text-ink">Email</label>
              <input 
                id="contact-email"
                type="email" 
                disabled
                placeholder="your.email@example.com"
                class="field"
              >
            </div>
            <div>
              <label for="contact-message" class="mb-2 block font-medium text-ink">Message</label>
              <textarea 
                id="contact-message"
                disabled
                rows="4"
                placeholder="Your message..."
                class="field"
              ></textarea>
            </div>
            <button 
              type="button" 
              disabled
              class="btn w-full"
            >
              Coming Soon
            </button>
          </form>
        </div>
        
        <!-- Contact Info -->
        <div class="card p-8">
          <h2 class="text-2xl font-semibold mb-6">Get In Touch</h2>
          
          <div class="space-y-4">
            <div>
              <h3 class="font-medium">Email</h3>
              <a 
                href="mailto:email@damiencastro.dev" 
                class="link"
              >
                email&#64;damiencastro.dev
              </a>
            </div>
            
            <div>
              <h3 class="font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/damien-castro-dev" 
                target="_blank"
                rel="noopener noreferrer"
                class="link"
              >
                linkedin.com/in/damien-castro-dev
              </a>
            </div>
            
            <div>
              <h3 class="font-medium">GitHub</h3>
              <a 
                href="https://github.com/Damiencastro" 
                target="_blank"
                rel="noopener noreferrer"
                class="link"
              >
                github.com/Damiencastro
              </a>
            </div>
            
            <div class="pt-4 border-t border-line">
              <h3 class="font-medium">Location</h3>
              <p>Currently in Georgia, USA</p>
              <p class="text-sm">Relocating to Seattle, WA in 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent { }
