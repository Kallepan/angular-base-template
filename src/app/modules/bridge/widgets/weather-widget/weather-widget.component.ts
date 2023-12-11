import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

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
  imports: [MatProgressBarModule, MatIconModule],
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
