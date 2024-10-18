import { DatePipe, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true,
  imports: [DatePipe, NgFor]
})
export class PostComponent implements OnInit {
  @Input({ required: true })
  post!: Post;
  constructor() {}

  ngOnInit() {}
}
