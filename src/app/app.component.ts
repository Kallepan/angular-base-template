import { Component, HostBinding, OnInit, effect, inject, signal } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // dependencies
  private _overlayContainer = inject(OverlayContainer);

  // theme
  private _isDark = signal(false);
  @HostBinding('class') get themeMode() {
    return this._isDark() ? 'theme-dark' : 'theme-light';
  }

  get isDark() {
    return this._isDark();
  }

  toggleTheme() {
    this._isDark.set(!this._isDark());
  }

  // sidenav
  private _isSidenavOpen = signal(false);
  get isSidenavOpen() {
    return this._isSidenavOpen();
  }
  setSidenavState(state: boolean) {
    this._isSidenavOpen.set(state);
  }

  // lifecycle hooks
  constructor() {
    effect(() => {
      if (this._isDark()) {
        this._overlayContainer.getContainerElement().classList.remove('theme-dark');
        this._overlayContainer.getContainerElement().classList.add('theme-light');
      } else {
        this._overlayContainer.getContainerElement().classList.remove('theme-light');
        this._overlayContainer.getContainerElement().classList.add('theme-dark');
      }
    });
  }
}
