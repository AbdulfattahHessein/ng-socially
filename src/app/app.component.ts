import { Component } from '@angular/core';
import { MessageSidebarComponent } from './components/message-sidebar/message-sidebar.component';
import { FriendsRequestsListComponent } from './components/friends-requests-list/friends-requests-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { ThemeComponent } from './components/theme/theme.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MessageSidebarComponent,
    FriendsRequestsListComponent,
    SidebarComponent,
    HeaderComponent,
    ThemeComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  title = 'ng-social-media';
}
