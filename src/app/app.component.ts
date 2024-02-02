import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { HomeComponent } from './module/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatToolbar, HomeComponent, RouterModule],
})
export class AppComponent {
    title = 'chat-app';
}
