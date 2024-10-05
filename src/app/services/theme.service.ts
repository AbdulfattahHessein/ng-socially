import { BGColor } from '../enums/background-color.enum';
import { ColorHue } from './../enums/color.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  root = document.querySelector<HTMLElement>(':root');
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
    if (this.root) {
      this.root.style.setProperty('--primary-color-hue', color.toString());
    }
  }

  changeFontSize(size: number) {
    this._selectedFontSize = size;
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.fontSize = this._fonts[size];
    }
  }

  readonly bgColors: BGColor[] = [
    {
      name: 'Light',
      hsl: 'hsl(0, 0%, 100%)',
      lightness: {
        light: 95,
        white: 100,
        dark: 17,
      },
    },
    {
      name: 'Dark',
      hsl: 'hsl(252, 30%, 17%)',
      lightness: {
        light: 15,
        white: 20,
        dark: 95,
      },
    },
    {
      name: 'Black',
      hsl: 'hsl(252, 30%, 10%)',
      lightness: {
        light: 0,
        white: 10,
        dark: 95,
      },
    },
  ];

  private _selectedBgColor = this.bgColors[0];
  get selectedBgColor() {
    return this._selectedBgColor;
  }

  changeBGColor(bgColor: BGColor) {
    this._selectedBgColor = bgColor;
    if (this.root) {
      this.root.style.setProperty(
        '--light-color-lightness',
        `${bgColor.lightness.light}%`
      );
      this.root.style.setProperty(
        '--white-color-lightness',
        `${bgColor.lightness.white}%`
      );
      this.root.style.setProperty(
        '--dark-color-lightness',
        `${bgColor.lightness.dark}%`
      );
    }
  }

  constructor() {}
}
