import { User } from './user.model';

export interface Post {
  id: number;
  date: Date;
  image: string;
  caption: string;
  user: User;
  likes: {
    username: string;
    photo: string;
  }[];
  commentsCount: number;
}
