import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { constants } from './config/constants';
import { AppModule } from './app.module';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';
import { OverlayContainer } from '@angular/cdk/overlay';

describe('AppComponent', () => {
  let overlayContainer: OverlayContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ],
      declarations: [AppComponent],
      providers: [
        OverlayContainer,
      ]
    });
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-base-template'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(constants.TITLE).toEqual('Angular Base Template');
  });

  // Test for theme
  it('should have theme mode', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.themeMode).toEqual('theme-light');
  });

  // Toggle theme test
  it('should toggle theme mode', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.toggleTheme();
    expect(app.themeMode).toEqual('theme-dark');
  });

  // Check overlay container
  it('theme should match boolean', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;

    expect(overlayContainer.getContainerElement().classList).toContain('theme-dark');

    // Toggle theme
    app.toggleTheme();
    fixture.detectChanges();

    // Wait for the animation to finish
    flush();

    // Check if the theme is now light
    expect(overlayContainer.getContainerElement().classList).toContain('theme-light');

  }));

  // Test open sidenav
  it('should open sidenav', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setSidenavState(true);

    // Fetch the sidenav element
    let loader = TestbedHarnessEnvironment.loader(fixture);
    const sidenav = await loader.getHarness(MatSidenavHarness);

    // Check if the sidenav is open
    expect(await sidenav.isOpen()).toBe(true);
  });

  // Test Open and Close sidenav
  it('should open and close sidenav', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setSidenavState(true);

    // Fetch the sidenav element
    let loader = TestbedHarnessEnvironment.loader(fixture);
    const sidenav = await loader.getHarness(MatSidenavHarness);

    // Check if the sidenav is open
    expect(await sidenav.isOpen()).toBe(true);

    // Close the sidenav
    app.setSidenavState(false);

    // Check if the sidenav is closed
    expect(await sidenav.isOpen()).toBe(false);
  });
});
