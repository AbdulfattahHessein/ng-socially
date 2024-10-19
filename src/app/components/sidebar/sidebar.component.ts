import { ThemeService } from './../../services/theme.service';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NotificationsPopupComponent } from './notifications-popup/notifications-popup.component';
import { ButtonComponent } from '../../modules/shared/components/button/button.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [
    ProfileCardComponent,
    MenuItemComponent,
    NotificationsPopupComponent,
    ButtonComponent,
  ],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  NPopupClosed = true;
  openThemeModal() {
    this.themeService.open();
    console.log(this.themeService.isOpened);
  }

  themeService = inject(ThemeService);

  constructor() {}
  ngAfterViewInit(): void {
    let menuItems = document.querySelectorAll('a[appMenuItem]');
    menuItems.forEach((menuItem) =>
      menuItem.addEventListener('click', () => {
        menuItems.forEach((menuItem) => menuItem.classList.remove('active'));
        menuItem.classList.add('active');
        if (menuItem.id != 'notifications') this.NPopupClosed = true;
      })
    );
  }

  ngOnInit() {}
}
