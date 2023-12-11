import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

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
  styles: [
    `
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 1rem auto;
      }
    `,
  ],
  standalone: true,
  imports: [
    WeatherWidgetComponent,
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    MatProgressBarModule,
    MatIconModule,
  ],
})
export class ViewComponent {}
