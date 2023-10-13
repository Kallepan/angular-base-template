import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompositionComponent } from './composition.component';
import { AppModule } from 'src/app/app.module';

describe('CompositionComponent', () => {
  let component: CompositionComponent;
  let fixture: ComponentFixture<CompositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, CompositionComponent],
    });
    fixture = TestBed.createComponent(CompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
