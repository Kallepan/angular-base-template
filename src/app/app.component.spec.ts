import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { constants } from './core/constants/constants';
import { AppModule } from './app.module';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';
import { OverlayContainer } from '@angular/cdk/overlay';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent],
    });
  });

  it('should create the app', fakeAsync(() => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app).toBeTruthy();
  }));
});
