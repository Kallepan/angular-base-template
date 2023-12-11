import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '@app/core/services/notification.service';
import { CanResponsiveDirective } from '@app/shared/directives/can-responsive.directive';

@Component({
  standalone: true,
  // signals: true, // this is available in Angular 17+
  selector: 'app-standalone',
  template: `<p>standalone works!</p>`,
  hostDirectives: [
    {
      directive: CanResponsiveDirective,
    },
  ],
})
export class StandaloneOneComponent implements OnInit {
  _notificationService = inject(NotificationService);
  ngOnInit(): void {
    this._notificationService.infoMessage('Standalone Component Loaded');
  }
}
