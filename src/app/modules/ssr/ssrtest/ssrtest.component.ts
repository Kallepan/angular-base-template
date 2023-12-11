import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-ssrtest',
  standalone: true,
  imports: [CommonModule],
  styles: '',
  template: `<span #content>{{ testValue }}</span>`,
})
export class SSRTestComponent {
  @ViewChild('content') contentRef: ElementRef;

  testValue = 'test';

  constructor() {
    afterNextRender(() => {
      // Safe to check `scrollHeight` because this will only run in the browser, not the server.

      console.log(
        'content height: ' + this.contentRef.nativeElement.scrollHeight,
      );
    });
  }
}
