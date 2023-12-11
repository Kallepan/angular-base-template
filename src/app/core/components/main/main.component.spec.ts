import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';

import { MainComponent } from './main.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HarnessLoader } from '@angular/cdk/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let overlayContainer: OverlayContainer;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainComponent, BrowserAnimationsModule, RouterTestingModule],
      providers: [OverlayContainer],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    fixture.detectChanges();

    // Fetch the loader
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Test for theme
  it('should have theme mode', () => {
    expect(component.themeMode).toEqual('theme-dark');
  });

  // Toggle theme test
  it('should toggle theme mode', () => {
    component.isDark.set(false);
    expect(component.themeMode).toEqual('theme-light');
  });

  // Check overlay container
  it('theme should match boolean', fakeAsync(() => {
    fixture.detectChanges();

    expect(overlayContainer.getContainerElement().classList).toContain(
      'theme-dark',
    );

    // Toggle theme
    component.isDark.set(false);
    fixture.detectChanges();

    // Wait for the animation to finish
    flush();

    // Check if the theme is now light
    expect(overlayContainer.getContainerElement().classList).toContain(
      'theme-light',
    );
  }));

  // Sidenav testing
  it('should be closed', async () => {
    // Fetch the sidenav element
    const sidenav = await loader.getHarness(MatSidenavHarness);

    // Check if the sidenav is closed by default
    expect(await sidenav.isOpen()).toBe(false);
  });
});
