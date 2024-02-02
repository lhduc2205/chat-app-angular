import { type Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { ChatRoomComponent } from './module/chat-room/chat-room.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'chat-room/:id',
        component: ChatRoomComponent,
        title: 'Chat room',
    },
];
