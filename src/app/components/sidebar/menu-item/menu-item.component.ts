import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'a[appMenuItem]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  standalone: true,
  imports: [NgIf],
  host: {
    class: 'menu-item',
  },
})
export class MenuItemComponent implements OnInit {
  @Input() icon?: string;
  hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  @Input() notificationCount = 0;

  ngOnInit() {
    const icon = document.querySelector('i');
    if (icon) {
      icon.style.color = icon.classList.contains('active')
        ? 'var(--color-primary)'
        : 'var(--color-gray)';
    }
  }
}
