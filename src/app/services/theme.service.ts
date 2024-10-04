import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _visible = false;
  get isOpened() {
    return this._visible;
  }
  open() {
    this._visible = true;
  }
  close() {
    this._visible = false;
  }
  constructor() {}
}
