import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, HostBinding, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[canResponsive]',
  standalone: true
})
export class CanResponsiveDirective implements OnInit, OnDestroy {
  private _responsive = inject(BreakpointObserver);
  private _tableBreakPointSubscription: Subscription | undefined;

  @HostBinding ('class.is-tablet') isTablet = false;

  ngOnInit(): void {
    this._tableBreakPointSubscription = this._responsive.observe(Breakpoints.Tablet)
      .subscribe(result => {
        this.isTablet = result.matches;
      });
  }

  ngOnDestroy(): void {
    this._tableBreakPointSubscription?.unsubscribe();
  }
}
