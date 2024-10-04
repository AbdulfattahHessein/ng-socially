import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  themeService = inject(ThemeService);

  constructor() {
    console.log(this.themeService.colors);
    
  }

  ngOnInit() {}
}
