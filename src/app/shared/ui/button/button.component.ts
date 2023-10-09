import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CanDisableDirective } from 'src/app/shared/directives/can-disable.directive';
import { CanAppearanceDirective } from '../../directives/can-appearance.directive';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanDisableDirective,
      inputs: ['disabled']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance: type']
    }
  ]
})
export class ButtonComponent {

}
