import { ThemeService } from './../../services/theme.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  openThemeModal() {
    this.themeService.open();
    console.log(this.themeService.isOpened);
    
  }

  themeService = inject(ThemeService);

  constructor() {}

  ngOnInit() {}
}
