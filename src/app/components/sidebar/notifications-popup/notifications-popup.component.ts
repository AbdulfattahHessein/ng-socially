import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification.model';

@Component({
  selector: 'app-notifications-popup',
  templateUrl: './notifications-popup.component.html',
  styleUrls: ['./notifications-popup.component.css'],
  host: {
    class: 'notifications-popup scrollable',
  },
})
export class NotificationsPopupComponent implements OnInit {
  notifications: Notification[] = [
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-2.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-3.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-4.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 4 * 60 * 1000),
    },
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-5.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-6.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
    {
      user: {
        name: 'john doe',
        photo: './assets/images/profile-7.jpg',
      },
      message: 'accepted your friend request',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
  ];
  constructor() {}

  ngOnInit() {}
}
