import { OverlayContainer } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, effect, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

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
    SidenavComponent,
    RouterModule,
  ],
})
export class MainComponent {
  // dependencies
  private _overlayContainer = inject(OverlayContainer);

  // theme
  isDark = signal(true);
  @HostBinding('class') get themeMode() {
    return this.isDark() ? 'theme-dark' : 'theme-light';
  }

  // lifecycle hooks
  constructor() {
    effect(() => {
      if (this.isDark()) {
        this._overlayContainer.getContainerElement().classList.add('theme-dark');
        this._overlayContainer.getContainerElement().classList.remove('theme-light');
      } else {
        this._overlayContainer.getContainerElement().classList.add('theme-light');
        this._overlayContainer.getContainerElement().classList.remove('theme-dark');
      }
    });
  }
}
