import { OverlayContainer } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, effect, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class MainComponent {
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