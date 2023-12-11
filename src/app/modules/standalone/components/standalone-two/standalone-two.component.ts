import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '@app/core/services/notification.service';

@Component({
  selector: 'app-standalone-two',
  standalone: true,
  imports: [CommonModule],
  template: `<p>standalone-two works!</p>`,
})
export class StandaloneTwoComponent implements OnInit {
  private _notificationService = inject(NotificationService);

  ngOnInit(): void {
    this._notificationService.infoMessage('Standalone Component Loaded');
  }
}
