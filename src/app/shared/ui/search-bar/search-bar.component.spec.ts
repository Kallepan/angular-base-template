import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent, SearchBarComponentModule } from './search-bar.component';
import { FormControl } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [SearchBarComponentModule, AppModule],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    const control = new FormControl();
    component = fixture.componentInstance;
    component.control = control;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form control', () => {
    expect(component.control).toBeTruthy();
  });
});
