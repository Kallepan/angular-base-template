import { Component } from '@angular/core';
import { BridgeModule } from './bridge.module';

@Component({
  selector: 'app-view',
  template: `
  <div class="container">
    <app-widget-wrapper>
      <app-velocity-widget></app-velocity-widget>
    </app-widget-wrapper>
    <app-widget-wrapper>
        <app-weather-widget></app-weather-widget>
    </app-widget-wrapper>
  </div>
  `,
  styles: [`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem auto;
    }
    `],
  standalone: true,
  imports: [BridgeModule],
})
export class ViewComponent { }
