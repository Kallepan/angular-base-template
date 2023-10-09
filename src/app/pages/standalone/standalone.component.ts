import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CanResponsiveDirective } from 'src/app/shared/directives/can-responsive.directive';

@Component({
  standalone: true,
  // signals: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [
    MaterialModule,
  ],
  hostDirectives: [
    {
      directive: CanResponsiveDirective,
    }
  ]
})
export class StandaloneComponent {

}
