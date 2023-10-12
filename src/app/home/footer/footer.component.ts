import { Component, ViewEncapsulation } from '@angular/core';
import { constants } from 'src/app/config/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  version = constants.VERSION;
  year = new Date().getFullYear();
}
