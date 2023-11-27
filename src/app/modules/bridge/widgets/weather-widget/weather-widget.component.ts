import { WIDGET } from '../widget.token';
import { Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    {
      // Note: ForwardRef is not needed here because @Component is 'transpiled' after the class.
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
  imports: [
    MatProgressBarModule,
    MatIconModule,
  ]
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;
  load() {
    console.log('Load data from WEATHER API... ');
  }
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}