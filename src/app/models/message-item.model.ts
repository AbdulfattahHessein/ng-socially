export interface ChatCard {
  username: string;
  userPhoto: string;
  lastMessage: string;
  time: Date;
  messagesCount: number;
  isUserActive: boolean;
  isChatRead: boolean;
}
