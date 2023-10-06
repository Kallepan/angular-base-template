import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  standalone: true,
  // signals: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [
    MaterialModule,
  ]
})
export class StandaloneComponent {

}
