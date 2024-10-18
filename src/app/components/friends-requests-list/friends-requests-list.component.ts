import { Component, inject, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';
import { FriendsService } from 'src/app/services/friends.service';
import { FriendRequestComponent } from "./friend-request/friend-request.component";
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-friends-requests-list',
  templateUrl: './friends-requests-list.component.html',
  styleUrls: ['./friends-requests-list.component.css'],
  standalone: true,
  imports: [FriendRequestComponent, NgFor, AsyncPipe],
})
export class FriendsRequestsListComponent implements OnInit {
  friendsService = inject(FriendsService);
  friendRequests$ = this.friendsService.getAllFriendRequests();

  constructor() {}

  ngOnInit() {}
}
