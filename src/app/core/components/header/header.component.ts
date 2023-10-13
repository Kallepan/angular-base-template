import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { constants } from '@app/core/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class HeaderComponent {
  private _router = inject(Router);

  title = constants.TITLE;
  @Input() isDark = false;
  @Output() onToggleTheme = new EventEmitter<void>();
  @Output() onToggleSidenav = new EventEmitter<void>();

  // Fetch the routes from the router config
  routes = this._router.config.map((route) => {
    const data = route.data || {};
    return {
      path: route.path,
      label: data['label'],	
    }
  }).filter((route) => !!route.label); // Filter out the routes without labels

  toggleTheme() {
    this.onToggleTheme.emit();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
