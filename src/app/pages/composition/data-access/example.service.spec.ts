import { TestBed } from '@angular/core/testing';

import { CompositionData, CompositionTableService } from './example.service';
import { CompositionModule } from '../composition.module';

describe('CompositionTableService', () => {
  let service: CompositionTableService<CompositionData>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CompositionModule,
      ]
    });
    service = TestBed.inject(CompositionTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});