import { Injectable } from '@angular/core';
import { chatRoomData } from '../../data/chat-room-data';
import { ChatRoom } from '../../model/room-item';

@Injectable({
    providedIn: 'root',
})
export class ChatRoomService {
    chatRoomList: ChatRoom[] = chatRoomData;

    constructor() {}

    getAllChatRooms(): ChatRoom[] {
        return this.chatRoomList;
    }

    getChatRoomById(id: Number): ChatRoom | undefined {
        return this.chatRoomList.find((room) => room.id === id);
    }
}
