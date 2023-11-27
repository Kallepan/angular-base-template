import { MatDividerModule } from '@angular/material/divider';
import { Widget } from '../widgets/widget.interface';
import { WIDGET } from '../widgets/widget.token';
import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  standalone: true,
  imports: [
    MatDividerModule,
  ]
})
export class WidgetWrapperComponent implements OnInit {
  // static: true is required for ng-content to work
  @ContentChild(WIDGET as any, { static: true })

  widget: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}