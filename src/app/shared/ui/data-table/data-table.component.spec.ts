import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';

type MockType = {
  value: string;
  id: number;
}

describe('DataTableComponent', () => {
  let component: DataTableComponent<MockType>;
  let fixture: ComponentFixture<DataTableComponent<MockType>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableComponent]
    });
    fixture = TestBed.createComponent(DataTableComponent<MockType>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
