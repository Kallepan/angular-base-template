import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from 'src/app/config/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = constants.TITLE;
  @Input() isDark = false;
  @Output() onToggleTheme = new EventEmitter<void>();
  @Output() onToggleSidenav = new EventEmitter<void>();

  routes = constants.ROUTES;

  toggleTheme() {
    this.onToggleTheme.emit();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
