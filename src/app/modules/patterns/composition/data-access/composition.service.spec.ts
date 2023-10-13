import { TestBed } from '@angular/core/testing';
import { CompositionData, CompositionTableService } from './composition';

describe('CompositionTableService', () => {
  let service: CompositionTableService<CompositionData>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = TestBed.inject(CompositionTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have tableSchema with key and label properties', () => {
    expect(service.tableSchema.length).toBeGreaterThan(0);
    service.tableSchema.forEach((schema) => {
      expect(schema.key).toBeTruthy();
      expect(schema.label).toBeTruthy();
    });
  });

  it('should have tableData$ observable', () => {
    expect(service.tableData$).toBeTruthy();
  });

  it('getAll() should return an observable', () => {
    const value = service.getAll().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    });

    expect(value).toBeTruthy();
    value.unsubscribe();
  });

});