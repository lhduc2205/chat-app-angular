import { type User } from './user';

export interface ChatRoom {
    id: number;
    title: string;
    description: string;
    owner: User;
}
