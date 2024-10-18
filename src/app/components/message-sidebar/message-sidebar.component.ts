import { ChatsService } from './../../services/chats.service';
import { Component, inject, OnInit } from '@angular/core';
import { ChatCard } from 'src/app/models/message-item.model';

@Component({
  selector: 'app-message-sidebar',
  templateUrl: './message-sidebar.component.html',
  styleUrls: ['./message-sidebar.component.css'],
})
export class MessageSidebarComponent implements OnInit {
  searchValue: string = '';
  chatsService = inject(ChatsService);
  chatsCards$ = this.chatsService.getAllChatsCards();
  OnSearch() {
    this.chatsCards$ = this.chatsService.search(this.searchValue);
  }
  constructor() {}

  ngOnInit() {}
}
