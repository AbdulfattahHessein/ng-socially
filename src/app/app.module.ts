import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { PostComponent } from './components/post/post.component';
import { MessageSidebarComponent } from './components/message-sidebar/message-sidebar.component';
import { ChatCardComponent } from './components/chat-card/chat-card.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    StoryComponent,
    PostComponent,
    MessageSidebarComponent,
    ChatCardComponent,
    FriendRequestComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
