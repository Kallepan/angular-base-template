import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ColumnsSchema } from '../components/data-table/data-table.component';

export abstract class AbstractTableService<T> {
  searchControl: FormControl = new FormControl('');
  tableSearch$ = this.searchControl.valueChanges.pipe(
    filter((contents): contents is string => typeof contents === 'string'),
    debounceTime(200)
  );

  abstract tableData$: Observable<T[]>;
  abstract tableSchema: ColumnsSchema[];
}