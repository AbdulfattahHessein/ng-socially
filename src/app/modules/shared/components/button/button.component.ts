import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[appButton], app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input('for') elementId: string = '';
  constructor() {}

  ngOnInit() {}
}
