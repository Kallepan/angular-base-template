import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CanResponsiveDirective } from 'src/app/shared/directives/can-responsive.directive';
import { NotificationService } from 'src/app/shared/ui/notification/notification.service';

@Component({
  standalone: true,
  // signals: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  providers: [
    NotificationService
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
