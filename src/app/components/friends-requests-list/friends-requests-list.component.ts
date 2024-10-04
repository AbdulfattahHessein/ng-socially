import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';

@Component({
  selector: 'app-friends-requests-list',
  templateUrl: './friends-requests-list.component.html',
  styleUrls: ['./friends-requests-list.component.css'],
})
export class FriendsRequestsListComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
