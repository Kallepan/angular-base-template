import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompositionComponent } from './composition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CompositionComponent', () => {
  let component: CompositionComponent;
  let fixture: ComponentFixture<CompositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompositionComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
