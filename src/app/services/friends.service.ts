import { Injectable } from '@angular/core';
import { FriendRequest } from '../models/friend-request.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private friendRequests$ = of<FriendRequest[]>([
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-5.jpg',
      mutualFriendsCount: 5,
      isAccepted: false,
      date: new Date(),
    },
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-6.jpg',
      mutualFriendsCount: 3,
      isAccepted: false,
      date: new Date(),
    },
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-7.jpg',
      mutualFriendsCount: 8,
      isAccepted: false,
      date: new Date(),
    },
  ]);

  getAllFriendRequests() {
    return this.friendRequests$;
  }
  constructor() {}
}
