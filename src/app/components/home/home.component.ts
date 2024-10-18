import { Component, inject, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';
import { Post } from 'src/app/models/post.model';
import { Story } from 'src/app/models/story.model';
import { PostsService } from 'src/app/services/posts.service';
import { StoriesService } from 'src/app/services/stories.service';
import { StoryComponent } from "./story/story.component";
import { SharedModule } from "../../modules/shared/shared.module";
import { PostComponent } from "./post/post.component";
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [StoryComponent, SharedModule, PostComponent, NgFor, AsyncPipe]
})
export class HomeComponent implements OnInit {
  storiesServices = inject(StoriesService);
  postsServices = inject(PostsService);
  stories$ = this.storiesServices.getAll();

  posts$ = this.postsServices.getAll();

  constructor() {}

  ngOnInit() {}
}
