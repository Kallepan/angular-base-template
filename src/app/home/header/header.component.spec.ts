import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HomeModule } from '../home.module';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HomeModule,
      ],
      providers: [
        Router,
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
