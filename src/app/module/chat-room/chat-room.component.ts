import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { type User } from '../../model/user';

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
    route: ActivatedRoute = inject(ActivatedRoute);
    roomId: string;
    participant!: User;
    msgValue: string = '';

    constructor() {
        this.roomId = this.route.snapshot.paramMap.get('id') ?? 'null';
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
