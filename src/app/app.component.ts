import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { constants } from './config/constants';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // dependencies
  private _overlayContainer = inject(OverlayContainer);

  // variables
  title = constants.TITLE;
  version = constants.VERSION;
  year = new Date().getFullYear();

  // theme
  private _isDark = false;
  @HostBinding('class')
  get themeMode() {
    return this._isDark ? 'theme-dark' : 'theme-light';
  }

  get isDark() {
    return this._isDark;
  }

  toggleTheme() {
    this._isDark = !this._isDark;
    if (this._isDark) {
      this._overlayContainer.getContainerElement().classList.remove('theme-dark');
      this._overlayContainer.getContainerElement().classList.add('theme-light');
    } else {
      this._overlayContainer.getContainerElement().classList.remove('theme-light');
      this._overlayContainer.getContainerElement().classList.add('theme-dark');
    }
  }

  // lifecycle hooks

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
