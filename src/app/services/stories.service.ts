import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private stories = of<Story[]>([
    {
      image: './assets/images/profile-8.jpg',
      username: 'Your Story',
      profilePhoto: '/assets/images/story-1.jpg',
    },
    {
      image: './assets/images/profile-9.jpg',
      username: 'Hussein',
      profilePhoto: '/assets/images/story-2.jpg',
    },
    {
      image: './assets/images/profile-10.jpg',
      username: 'Mohamed',
      profilePhoto: '/assets/images/story-3.jpg',
    },
    {
      image: './assets/images/profile-11.jpg',
      username: 'Ali',
      profilePhoto: '/assets/images/story-4.jpg',
    },
    {
      image: './assets/images/profile-12.jpg',
      username: 'Ahmed',
      profilePhoto: '/assets/images/story-5.jpg',
    },
  ]);

  getAll() {
    return this.stories;
  }
}
