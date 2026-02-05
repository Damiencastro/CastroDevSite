import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Placeholder data - will be replaced with Firestore data in Phase 2+
  
  featuredProjects = [
    {
      slug: 'midas',
      name: 'MIDAS',
      tagline: 'Accounting software built with Angular and Firebase',
      techStack: ['Angular', 'TypeScript', 'Firebase', 'RxJS'],
      imageUrl: 'https://placehold.co/600x400/E2E8F0/4A5568?text=MIDAS'
    },
    {
      slug: 'mobinav',
      name: 'MobiNav',
      tagline: 'Accessibility-focused campus navigation tool',
      techStack: ['React', 'Flask', 'PostgreSQL', 'Google Maps API'],
      imageUrl: 'https://placehold.co/600x400/E2E8F0/4A5568?text=MobiNav'
    }
  ];

  recentPosts = [
    {
      slug: 'rhcsa-journey',
      title: 'RHCSA Certification Journey',
      excerpt: 'My experience studying for and passing the Red Hat Certified System Administrator exam, including study tips and resources.',
      date: 'Coming Soon',
      readingTime: 8,
      tags: ['Linux', 'Certification', 'RHCSA']
    },
    {
      slug: 'mobinav-deep-dive',
      title: 'MobiNav Technical Deep-Dive',
      excerpt: 'A comprehensive look at building an accessibility-focused navigation application with React, Flask, and mapping APIs.',
      date: 'Coming Soon',
      readingTime: 12,
      tags: ['React', 'Flask', 'Accessibility']
    },
    {
      slug: 'midas-retrospective',
      title: 'MIDAS Project Retrospective',
      excerpt: 'Lessons learned from building a full-stack accounting application as part of my Application Domain course.',
      date: 'Coming Soon',
      readingTime: 10,
      tags: ['Angular', 'Firebase', 'Lessons Learned']
    }
  ];
}
