import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Define interfaces for your data models for type safety.
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedDate: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  sourceUrl: string;
}


@Injectable({
  // This service is provided in the root injector, making it a singleton.
  providedIn: 'root'
})
export class FirebaseService {
  // Use inject() to get the Firestore instance.
  private firestore: Firestore = inject(Firestore);

  constructor() { }

  // --- Blog Methods ---

  /**
   * Gets all blog posts as an observable.
   * @returns An Observable of BlogPost arrays.
   */
  getBlogPosts(): Observable<BlogPost[]> {
    const postsCollection = collection(this.firestore, 'blogPosts');
    // collectionData will automatically update when Firestore data changes.
    return collectionData(postsCollection, { idField: 'id' }) as Observable<BlogPost[]>;
  }

  /**
   * Gets a single blog post by its ID.
   * @param id The ID of the blog post.
   * @returns A Promise that resolves with the BlogPost data.
   */
  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    const postDocRef = doc(this.firestore, `blogPosts/${id}`);
    const docSnap = await getDoc(postDocRef);
    return docSnap.exists() ? docSnap.data() as BlogPost : undefined;
  }


  // --- Portfolio Methods ---

  /**
   * Gets all projects as an observable.
   * @returns An Observable of Project arrays.
   */
  getProjects(): Observable<Project[]> {
    const projectsCollection = collection(this.firestore, 'projects');
    return collectionData(projectsCollection, { idField: 'id' }) as Observable<Project[]>;
  }
}
