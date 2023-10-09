import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[canAppearance]'
})
export class CanAppearanceDirective {
  @Input()
  appearance: 'solid' | 'stroked' = 'solid';

  @HostBinding('class')
  protected get computedHostClass(): string {
    return `df-${[this.appearance]}`;
  }
}
