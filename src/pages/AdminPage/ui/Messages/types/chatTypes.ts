export interface IMessages {
  id: string;
  senderRole: string;
  createdAt: string;
  chatId: string;
  content: string;
}

interface IUser {
  email: string;
}

export interface IChat {
  id: string;
  createdAt: string;
  status: string;
  updatedAt: string;
  userId: string;
  messages: IMessages[];
  user: IUser;
}
