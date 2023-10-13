import { Component, OnInit, inject } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { NotificationService } from '@app/core/services/notification.service';
import { CanResponsiveDirective } from '@app/shared/directives/can-responsive.directive';

@Component({
  standalone: true,
  // signals: true, // this is available in Angular 17+
  selector: 'app-standalone',
  template: `<p>standalone works!</p>`,
  imports: [
    CoreModule,
  ],
  hostDirectives: [
    {
      directive: CanResponsiveDirective,
    }
  ]
})
export class StandaloneComponent implements OnInit {
  _notificationService = inject(NotificationService);
  ngOnInit(): void {
    this._notificationService.infoMessage('Standalone Component Loaded');
  }
}
