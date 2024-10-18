import { Component, inject, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-requests-list',
  templateUrl: './friends-requests-list.component.html',
  styleUrls: ['./friends-requests-list.component.css'],
})
export class FriendsRequestsListComponent implements OnInit {
  friendsService = inject(FriendsService);
  friendRequests$ = this.friendsService.getAllFriendRequests();

  constructor() {}

  ngOnInit() {}
}
