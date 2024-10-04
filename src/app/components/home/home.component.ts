import { Component, OnInit } from '@angular/core';
import { FriendRequest } from 'src/app/models/friend-request.model';
import { Post } from 'src/app/models/post.model';
import { Story } from 'src/app/models/story.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stories: Story[] = [
    {
      image: './assets/images/profile-8.jpg',
      username: 'Your Story',
      profilePhoto: '/assets/images/story-1.jpg',
    },
    {
      image: './assets/images/profile-9.jpg',
      username: 'Hussein',
      profilePhoto: '/assets/images/story-2.jpg',
    },
    {
      image: './assets/images/profile-10.jpg',
      username: 'Mohamed',
      profilePhoto: '/assets/images/story-3.jpg',
    },
    {
      image: './assets/images/profile-11.jpg',
      username: 'Ali',
      profilePhoto: '/assets/images/story-4.jpg',
    },
    {
      image: './assets/images/profile-12.jpg',
      username: 'Ahmed',
      profilePhoto: '/assets/images/story-5.jpg',
    },
  ];

  posts: Post[] = [
    {
      id: 1,
      date: new Date(),
      image: './assets/images/feed-1.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Lana Rose',
        photo: './assets/images/profile-13.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-10.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-11.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 2,
      date: new Date(),
      image: './assets/images/feed-2.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Ernest Achiever',
        photo: './assets/images/profile-2.jpg',
      },
      likes: [
        {
          username: 'John Doe',
          photo: './assets/images/profile-4.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-3.jpg',
        },
        {
          username: 'Lana Rose',
          photo: './assets/images/profile-11.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 3,
      date: new Date(),
      image: './assets/images/feed-3.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Eren Marco',
        photo: './assets/images/profile-4.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-5.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-7.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 4,
      date: new Date(),
      image: './assets/images/feed-4.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Dodo Madin',
        photo: './assets/images/profile-6.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-11.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-8.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 5,
      date: new Date(),
      image: './assets/images/feed-5.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Marco John',
        photo: './assets/images/profile-8.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-10.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-11.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 6,
      date: new Date(),
      image: './assets/images/feed-6.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Angela John',
        photo: './assets/images/profile-18.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-10.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-11.jpg',
        },
      ],
      commentsCount: 277,
    },
    {
      id: 7,
      date: new Date(),
      image: './assets/images/feed-7.jpg',
      caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. #lifestyle',
      user: {
        username: 'Hana Moria',
        photo: './assets/images/profile-14.jpg',
      },
      likes: [
        {
          username: 'Ernest Achiever',
          photo: './assets/images/profile-9.jpg',
        },
        {
          username: 'John Doe',
          photo: './assets/images/profile-10.jpg',
        },
        {
          username: 'Jane Doe',
          photo: './assets/images/profile-11.jpg',
        },
      ],
      commentsCount: 277,
    },
  ];

  friendRequests: FriendRequest[] = [
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-5.jpg',
      mutualFriendsCount: 5,
      isAccepted: false,
      date: new Date(),
    },
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-6.jpg',
      mutualFriendsCount: 3,
      isAccepted: false,
      date: new Date(),
    },
    {
      username: 'Ernest Achiever',
      userPhoto: './assets/images/profile-7.jpg',
      mutualFriendsCount: 8,
      isAccepted: false,
      date: new Date(),
    },
  ];
  constructor() {}

  ngOnInit() {}
}
