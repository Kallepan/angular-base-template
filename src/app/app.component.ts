import { Component } from '@angular/core';
import { MainComponent } from './core/components/main/main.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MainComponent,

    RouterOutlet,
  ]
})
export class AppComponent { }
