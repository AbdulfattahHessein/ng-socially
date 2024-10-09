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
    ThemeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
