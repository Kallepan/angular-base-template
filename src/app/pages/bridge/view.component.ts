import { Component } from '@angular/core';
import { BridgeModule } from './bridge.module';

@Component({
  selector: 'app-view',
  template: `
    <app-widget-wrapper>
      <app-velocity-widget></app-velocity-widget>
    </app-widget-wrapper>
    <app-widget-wrapper>
        <app-weather-widget></app-weather-widget>
    </app-widget-wrapper>
  `,
  standalone: true,
  imports: [BridgeModule],
})
export class ViewComponent { }
