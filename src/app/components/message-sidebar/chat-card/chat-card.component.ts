import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChatCard } from 'src/app/models/message-item.model';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css'],
  standalone: true,
  imports: [NgIf, NgClass, DatePipe],
})
export class ChatCardComponent implements OnInit {
  @Input({ required: true })
  ChatCard!: ChatCard;
  constructor() {}
  isToday(date: Date) {
    const today = new Date();
    return (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    );
  }

  ngOnInit() {}
}
