import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/home/story/story.component';
import { PostComponent } from './components/home/post/post.component';
import { MessageSidebarComponent } from './components/message-sidebar/message-sidebar.component';
import { ChatCardComponent } from './components/message-sidebar/chat-card/chat-card.component';
import { FriendRequestComponent } from './components/friends-requests-list/friend-request/friend-request.component';
import { FriendsRequestsListComponent } from './components/friends-requests-list/friends-requests-list.component';
import { ThemeComponent } from './components/theme/theme.component';
import { MenuItemComponent } from './components/sidebar/menu-item/menu-item.component';
import { NotificationsPopupComponent } from './components/sidebar/notifications-popup/notifications-popup.component';
import { ProfileCardComponent } from './components/sidebar/profile-card/profile-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    StoryComponent,
    PostComponent,
    MessageSidebarComponent,
    ChatCardComponent,
    FriendRequestComponent,
    FriendsRequestsListComponent,
    ThemeComponent,
    MenuItemComponent,
    NotificationsPopupComponent,
    ProfileCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
