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
  host: {
    class: 'menu-item',
  },
})
export class MenuItemComponent implements OnInit, OnChanges {
  @Input() icon?: string;
  @Input() active: boolean = false;
  hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  @Input() notificationCount = 0;
  ngOnChanges(changes: SimpleChanges): void {
    this.hostElement.nativeElement.classList.toggle('active', this.active);
  }

  ngOnInit() {}
}
