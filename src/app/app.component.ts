import { Component } from '@angular/core';
import { FriendRequest } from './models/friend-request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-social-media';
  friendRequests: FriendRequest[] = [
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
  ];
}
