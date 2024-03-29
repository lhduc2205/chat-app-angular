import { Component, inject } from '@angular/core';
import { RoomItemComponent } from '../room-item/room-item.component';
import { type ChatRoom } from '../../model/room-item';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChatRoomService } from '../../service/chat-room/chat-room.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        RoomItemComponent,
        MatGridListModule,
    ],
})
export class HomeComponent {
    private chatRoomService: ChatRoomService = inject(ChatRoomService);

    chatRooms: ChatRoom[] = [];
    searchResult: ChatRoom[] = [];
    searchInputValue = '';

    constructor() {
        this.chatRooms = this.chatRoomService.getAllChatRooms();
        this.searchResult = this.chatRooms;
    }

    onSearchRoomById(searchText: string): void {
        if (searchText === '') {
            this.searchResult = this.chatRooms;
            this.clearSearchInputValue();
            return;
        }

        this.searchResult = this.searchResult.filter(
            (i) => i.id.toString() === searchText
        );
    }

    clearSearchInputValue(): void {
        this.searchInputValue = '';
    }
}
