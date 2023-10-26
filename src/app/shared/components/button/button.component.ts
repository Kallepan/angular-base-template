import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CanAppearanceDirective } from '@app/shared/directives/can-appearance.directive';
import { CanDisableDirective } from '@app/shared/directives/can-disable.directive';

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
