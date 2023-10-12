import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent,
  ]
})
export class BridgeModule { }
