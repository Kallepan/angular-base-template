import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompositionComponent } from './composition.component';

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

  it(`tableService should be defined`, () => {
    expect(component.tableService).toBeDefined();
  });

  it('should display table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-search-bar')).toBeTruthy();
    expect(compiled.querySelector('app-data-table')).toBeTruthy();
  });
});
