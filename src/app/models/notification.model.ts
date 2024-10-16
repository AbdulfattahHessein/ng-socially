export interface Notification {
  user: {
    name: string;
    photo: string;
  };
  message: string;
  date: Date;
}
