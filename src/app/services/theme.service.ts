import { ColorHue } from './../enums/color.enum';
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

  private readonly _fonts: Record<number, string> = {
    1: '10px',
    2: '13px',
    3: '16px',
    4: '19px',
    5: '22px',
  };

  get fontsSizes() {
    return Object.keys(this._fonts).map((key) => +key);
  }
  _selectedFontSize = 3;
  get selectedFontSize() {
    return this._selectedFontSize;
  }

  private _selectedColor = ColorHue.purple;
  get colors() {
    return Object.keys(ColorHue)
      .filter((color) => Number(color))
      .map((color) => ({
        name: ColorHue[+color],
        value: +color,
      }));

  }
  get selectedColor() {
    return this._selectedColor;
  }
  changeColor(color: ColorHue) {
    console.log(color);
    
    this._selectedColor = color;
    const root = document.querySelector<HTMLBRElement>(':root');
    if (root) {
      root.style.setProperty('--primary-color-hue', color.toString());
    }
  }

  changeFontSize(size: number) {
    this._selectedFontSize = size;
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.fontSize = this._fonts[size];
    }
  }

  constructor() {}
}
