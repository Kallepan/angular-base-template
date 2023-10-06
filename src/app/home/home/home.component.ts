import { Component } from '@angular/core';
import { constants } from 'src/app/config/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = constants.TITLE;
}
