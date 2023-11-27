import { Widget } from '../widget.interface';
import { Component } from '@angular/core';
import { WIDGET } from '../widget.token';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    standalone: true,
    selector: 'app-velocity-widget',
    templateUrl: './velocity-widget.component.html',
    styleUrls: ['./velocity-widget.component.scss'],
    providers: [
        {
            // Note: ForwardRef is not needed here because @Component is 'transpiled' after the class.
            provide: WIDGET,
            useExisting: VelocityWidgetComponent,
        },
    ],
    imports: [
        MatIconModule,
        MatProgressSpinnerModule,
    ]
})
export class VelocityWidgetComponent implements Widget {
    isRefreshing = false;

    load() {
        console.log('Load data from JIRA API... ');
    }
    refresh() {
        this.isRefreshing = true;
        setTimeout(() => {
            this.isRefreshing = false;
        }, 2500);
    }
}