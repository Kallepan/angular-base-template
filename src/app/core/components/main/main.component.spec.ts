import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let overlayContainer: OverlayContainer;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MainComponent,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        OverlayContainer,
      ]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Test for theme
  it('should have theme mode', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app.themeMode).toEqual('theme-light');
  });

  // Toggle theme test
  it('should toggle theme mode', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    app.toggleTheme();
    expect(app.themeMode).toEqual('theme-dark');
  });

  // Check overlay container
  it('theme should match boolean', fakeAsync(() => {
    const fixture = TestBed.createComponent(MainComponent);
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
    const fixture = TestBed.createComponent(MainComponent);
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
    const fixture = TestBed.createComponent(MainComponent);
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
