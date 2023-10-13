import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponent } from './standalone.component';

describe('StandaloneComponent', () => {
  let component: StandaloneComponent;
  let fixture: ComponentFixture<StandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // should contain a <p> tag
  it('should contain a <p> tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });
});
