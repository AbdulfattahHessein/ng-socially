import { ChatsService } from './../../services/chats.service';
import { Component, inject, OnInit } from '@angular/core';
import { ChatCard } from 'src/app/models/message-item.model';

@Component({
  selector: 'app-message-sidebar',
  templateUrl: './message-sidebar.component.html',
  styleUrls: ['./message-sidebar.component.css'],
})
export class MessageSidebarComponent implements OnInit {
  chatsService = inject(ChatsService);
  chatsCards$ = this.chatsService.getAllChatsCards();

  constructor() {}

  ngOnInit() {}
}
