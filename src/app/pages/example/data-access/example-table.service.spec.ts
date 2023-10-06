import { TestBed } from '@angular/core/testing';

import { ExampleCustomData, ExampleTableService } from './example-table.service';
import { ExampleModule } from '../example.module';

describe('ExampleTableService', () => {
  let service: ExampleTableService<ExampleCustomData>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ExampleModule,
      ]
    });
    service = TestBed.inject(ExampleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});