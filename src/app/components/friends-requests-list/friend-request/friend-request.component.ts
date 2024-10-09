import { Component, Input, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css'],
})
export class FriendRequestComponent implements OnInit {
  @Input({ required: true })
  request!: FriendRequest;
  constructor() {}

  ngOnInit() {}
}
