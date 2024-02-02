import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { type ChatRoom } from '../../model/room-item';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-room-item',
    standalone: true,
    templateUrl: './room-item.component.html',
    styleUrl: './room-item.component.css',
    imports: [MatCardModule, MatButtonModule, RouterModule],
})
export class RoomItemComponent {
    @Input() roomItem!: ChatRoom;
}
