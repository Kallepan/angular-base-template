import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSRTestComponent } from './ssrtest.component';

describe('SSRTestComponent', () => {
  let component: SSRTestComponent;
  let fixture: ComponentFixture<SSRTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSRTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SSRTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
