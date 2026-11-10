import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <div class="wrap py-16">
      <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 class="text-4xl font-bold">Resume</h1>
        <button 
          disabled
          class="btn"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download PDF (Coming Soon)
        </button>
      </div>
      
      <!-- Resume Content -->
      <div class="card p-8">
        <!-- Header -->
        <div class="border-b border-line pb-6 mb-6">
          <h2 class="text-3xl font-bold">Damien Castro</h2>
          <p class="mt-2">Software Engineer</p>
          <div class="flex flex-wrap gap-4 mt-4 text-sm">
            <span>Dallas, GA (Relocating to Seattle, WA)</span>
            <span>email&#64;damiencastro.dev</span>
            <span>github.com/Damiencastro</span>
          </div>
        </div>
        
        <!-- Education -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold mb-4 border-b border-line pb-2">
            Education
          </h3>
          <div>
            <h4 class="font-medium">Bachelor of Science in Software Engineering</h4>
            <p>Kennesaw State University, Kennesaw, GA</p>
            <p class="text-sm">Expected May 2026</p>
          </div>
        </section>
        
        <!-- Certifications -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold mb-4 border-b border-line pb-2">
            Certifications
          </h3>
          <div>
            <h4 class="font-medium">RHCSA - Red Hat Certified System Administrator</h4>
            <p class="text-sm">Red Hat, 2025</p>
          </div>
        </section>
        
        <!-- Skills -->
        <section class="mb-6">
          <h3 class="text-xl font-semibold mb-4 border-b border-line pb-2">
            Technical Skills
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-medium">Languages</h4>
              <p>TypeScript, Python, Java, SQL, HTML/CSS</p>
            </div>
            <div>
              <h4 class="font-medium">Frameworks</h4>
              <p>Angular, React, Flask, RxJS</p>
            </div>
            <div>
              <h4 class="font-medium">Databases</h4>
              <p>PostgreSQL, Firebase/Firestore, MongoDB</p>
            </div>
            <div>
              <h4 class="font-medium">Tools & Platforms</h4>
              <p>Git, Linux, Firebase, Docker</p>
            </div>
          </div>
        </section>
        
        <!-- Projects -->
        <section>
          <h3 class="text-xl font-semibold mb-4 border-b border-line pb-2">
            Projects
          </h3>
          <p class="italic">
            Full project details coming soon. See the Portfolio page for more information.
          </p>
        </section>
      </div>
    </div>
  `
})
export class ResumeComponent { }
