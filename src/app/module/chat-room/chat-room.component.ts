import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { type User } from '../../model/user';
import { ChatRoomService } from '../../service/chat-room/chat-room.service';

@Component({
    selector: 'app-chat-room',
    standalone: true,
    templateUrl: './chat-room.component.html',
    styleUrl: './chat-room.component.css',
    imports: [
        MatIconModule,
        MatButtonModule,
        RouterModule,
        MatGridListModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
    ],
})
export class ChatRoomComponent {
    private route: ActivatedRoute = inject(ActivatedRoute);
    private chatRoomService: ChatRoomService = inject(ChatRoomService);

    roomId: number;
    participant?: User;
    msgValue: string = '';

    constructor() {
        this.roomId = Number(this.route.snapshot.paramMap.get('id')) ?? 'null';
        this.participant = this.chatRoomService.getChatRoomById(
            this.roomId
        )?.owner;
    }

    setMsgValue(newValue: string): void {
        this.msgValue = newValue;
    }

    sendMessage(): void {
        this.clearMsgValue();
    }

    clearMsgValue(): void {
        this.msgValue = '';
    }
}
