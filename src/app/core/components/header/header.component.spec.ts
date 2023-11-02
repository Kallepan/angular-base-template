import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterTestingModule,
      ],
      providers: [
        Router,
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();

    // Fetch the loader
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be visible', () => { 
    const node = fixture.debugElement.query(By.css('.header-title'));
    expect(node.nativeElement.textContent).toContain(component.title);
  });

  it('routes should be rendered correctly', () => {
    // Fetch by 'a' tag
    const nodes = fixture.debugElement.nativeElement.querySelectorAll('a');

    const router = TestBed.inject(Router);
    expect(nodes.length).toEqual(router.config.filter(r => !!r.data).map(r => r.data!).length);
  });

  it('should emit open sidenav event', () => {
    spyOn(component.onToggleSidenav, 'emit');
    // Fetch by 'button' tag
    const nodes = fixture.debugElement.nativeElement.querySelectorAll('button');
    nodes[0].click();

    expect(component.onToggleSidenav.emit).toHaveBeenCalled();
  });

  it('should emit toggle theme event', async () => {
    spyOn(component.onToggleTheme, 'emit');

    const toggle = await loader.getHarness(MatSlideToggleHarness);
    await toggle.toggle();

    expect(component.onToggleTheme.emit).toHaveBeenCalled();
  });
});
