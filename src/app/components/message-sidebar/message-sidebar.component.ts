import { Component, OnInit } from '@angular/core';
import { ChatCard } from 'src/app/models/message-item.model';

@Component({
  selector: 'app-message-sidebar',
  templateUrl: './message-sidebar.component.html',
  styleUrls: ['./message-sidebar.component.css'],
})
export class MessageSidebarComponent implements OnInit {
  ChatsCards: ChatCard[] = [
    {
      username: 'Dodo Madin',
      userPhoto: './assets/images/profile-1.jpg',
      lastMessage: 'Hi there',
      time: new Date(),
      messagesCount: 2,
      isUserActive: true,
      isChatRead: true,
    },
    {
      username: 'Marco John',
      userPhoto: './assets/images/profile-2.jpg',
      lastMessage: 'Ok',
      time: new Date(),
      messagesCount: 1,
      isUserActive: false,
      isChatRead: false,
    },
    {
      username: 'Angela John',
      userPhoto: './assets/images/profile-3.jpg',
      lastMessage: 'Hi there',
      time: new Date('2022-05-01'),
      messagesCount: 1,
      isUserActive: true,
      isChatRead: true,
    },
    {
      username: 'Hana Moria',
      userPhoto: './assets/images/profile-4.jpg',
      lastMessage: 'LOL',
      time: new Date('2022-01-01'),
      messagesCount: 0,
      isUserActive: false,
      isChatRead: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
