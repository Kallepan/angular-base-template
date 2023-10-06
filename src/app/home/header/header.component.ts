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

  toggleTheme() {
    this.onToggleTheme.emit();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
