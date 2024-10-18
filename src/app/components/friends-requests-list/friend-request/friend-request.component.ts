import { Component, Input, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';
import { ButtonComponent } from "../../../modules/shared/components/button/button.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css'],
  standalone: true,
  imports: [ButtonComponent, NgIf]
})
export class FriendRequestComponent implements OnInit {
  @Input({ required: true })
  request!: FriendRequest;
  constructor() {}

  ngOnInit() {}
}
