import { type ChatRoom } from '../model/room-item';
import { userData } from './user-data';

export const chatRoomData: ChatRoom[] = [
    {
        id: 1,
        title: 'Room Title 1',
        description:
            "This is a room description. I'll make the text too long to avoid breaking the UI",
        owner: userData[0],
    },
    {
        id: 2,
        title: 'Room Title 2',
        description:
            "This is a room description. I'll make the text too long to avoid breaking the UI",
        owner: userData[1],
    },
    {
        id: 3,
        title: 'Room Title 3',
        description:
            "This is a room description. I'll make the text too long to avoid breaking the UI",
        owner: userData[2],
    },
];
