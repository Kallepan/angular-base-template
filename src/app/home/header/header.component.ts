import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/config/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
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
