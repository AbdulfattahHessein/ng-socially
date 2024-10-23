import { ChatsService } from './../../services/chats.service';
import { Component, ElementRef, Host, inject, OnInit } from '@angular/core';
import { ChatCard } from 'src/app/models/message-item.model';
import { ChatCardComponent } from './chat-card/chat-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-sidebar',
  templateUrl: './message-sidebar.component.html',
  styleUrls: ['./message-sidebar.component.css'],
  standalone: true,
  imports: [ChatCardComponent, NgFor, AsyncPipe, FormsModule],
  host: {
    // '[style.box-shadow]': '0 0 1rem var(--color-primary)',
  },
})
export class MessageSidebarComponent implements OnInit {
  searchValue: string = '';
  chatsService = inject(ChatsService);
  hostRef = inject<ElementRef<HTMLElement>>(ElementRef);
  chatsCards$ = this.chatsService.getAllChatsCards();
  OnSearch() {
    this.chatsCards$ = this.chatsService.search(this.searchValue);
  }
  constructor() {}

  ngOnInit() {
    this.chatsService.messagesHighlight$.subscribe(() => {
      this.boxShadow = '0 0 1rem var(--color-primary)';
      setTimeout(() => {
        this.boxShadow = 'none';
      }, 2000);
    });
  }
  set boxShadow(value: string) {
    this.hostRef.nativeElement.style.boxShadow = value;
  }
}
