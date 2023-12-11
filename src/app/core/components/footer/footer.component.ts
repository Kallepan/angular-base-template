import { Component } from '@angular/core';
import { constants } from '@app/core/constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent {
  version = constants.VERSION;
  year = new Date().getFullYear();
}
