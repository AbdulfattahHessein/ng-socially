import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class ThemeComponent implements OnInit {
  themeService = inject(ThemeService);

  constructor() {}

  ngOnInit() {}
}
