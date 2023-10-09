import { TestBed } from '@angular/core/testing';

import { ExampleData, ExampleTableService } from './example.service';
import { ExampleModule } from '../example.module';

describe('ExampleTableService', () => {
  let service: ExampleTableService<ExampleData>;

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