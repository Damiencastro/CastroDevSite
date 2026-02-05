import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Form Placeholder -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
          <p class="text-gray-600 mb-6">
            Contact form coming soon. In the meantime, feel free to reach out via email or LinkedIn.
          </p>
          
          <!-- Placeholder form (non-functional) -->
          <form class="space-y-4">
            <div>
              <label class="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                disabled
                placeholder="Your name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              >
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                disabled
                placeholder="your.email@example.com"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              >
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                disabled
                rows="4"
                placeholder="Your message..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              ></textarea>
            </div>
            <button 
              type="button" 
              disabled
              class="w-full bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </form>
        </div>
        
        <!-- Contact Info -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
          
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-gray-700">Email</h3>
              <a 
                href="mailto:email@damiencastro.dev" 
                class="text-blue-600 hover:underline"
              >
                email&#64;damiencastro.dev
              </a>
            </div>
            
            <div>
              <h3 class="font-medium text-gray-700">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/damien-castro-dev" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                linkedin.com/in/damien-castro-dev
              </a>
            </div>
            
            <div>
              <h3 class="font-medium text-gray-700">GitHub</h3>
              <a 
                href="https://github.com/Damiencastro" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                github.com/Damiencastro
              </a>
            </div>
            
            <div class="pt-4 border-t border-gray-200">
              <h3 class="font-medium text-gray-700">Location</h3>
              <p class="text-gray-600">Currently in Georgia, USA</p>
              <p class="text-gray-500 text-sm">Relocating to Seattle, WA in 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent { }
