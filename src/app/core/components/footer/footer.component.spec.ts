import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`version should be '1.0.0'`, () => {
    expect(component.version).toBe('1.0.0');
  });

  it('should display current year', () => {
    expect(component.year).toBe(new Date().getFullYear());

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(
      new Date().getFullYear(),
    );
  });
});
