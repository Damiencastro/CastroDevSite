import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto px-6 py-16">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800">Resume</h1>
        <button 
          disabled
          class="bg-gray-400 text-white py-2 px-6 rounded-lg cursor-not-allowed flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download PDF (Coming Soon)
        </button>
      </div>
      
      <!-- Resume Content -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <!-- Header -->
        <div class="border-b border-gray-200 pb-6 mb-6">
          <h2 class="text-3xl font-bold text-gray-800">Damien Castro</h2>
          <p class="text-gray-600 mt-2">Software Engineer</p>
          <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span>📍 Dallas, GA (Relocating to Seattle, WA)</span>
            <span>📧 email&#64;damiencastro.dev</span>
            <span>🔗 github.com/Damiencastro</span>
          </div>
        </div>
        
        <!-- Education -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Education
          </h3>
          <div>
            <h4 class="font-medium text-gray-800">Bachelor of Science in Software Engineering</h4>
            <p class="text-gray-600">Kennesaw State University, Kennesaw, GA</p>
            <p class="text-gray-500 text-sm">Expected May 2026</p>
          </div>
        </section>
        
        <!-- Certifications -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Certifications
          </h3>
          <div>
            <h4 class="font-medium text-gray-800">RHCSA - Red Hat Certified System Administrator</h4>
            <p class="text-gray-500 text-sm">Red Hat, 2025</p>
          </div>
        </section>
        
        <!-- Skills -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Technical Skills
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-medium text-gray-700">Languages</h4>
              <p class="text-gray-600">TypeScript, Python, Java, SQL, HTML/CSS</p>
            </div>
            <div>
              <h4 class="font-medium text-gray-700">Frameworks</h4>
              <p class="text-gray-600">Angular, React, Flask, RxJS</p>
            </div>
            <div>
              <h4 class="font-medium text-gray-700">Databases</h4>
              <p class="text-gray-600">PostgreSQL, Firebase/Firestore, MongoDB</p>
            </div>
            <div>
              <h4 class="font-medium text-gray-700">Tools & Platforms</h4>
              <p class="text-gray-600">Git, Linux, Firebase, Docker</p>
            </div>
          </div>
        </section>
        
        <!-- Projects -->
        <section>
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Projects
          </h3>
          <p class="text-gray-500 italic">
            Full project details coming soon. See the Portfolio page for more information.
          </p>
        </section>
      </div>
    </div>
  `
})
export class ResumeComponent { }
