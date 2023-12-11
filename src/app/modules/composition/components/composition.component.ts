import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataTableComponent } from '@app/shared/components/data-table/data-table.component';
import { SearchBarComponent } from '@app/shared/components/search-bar/search-bar.component';
import { AbstractTableService } from '@app/shared/services/data-table.service';
import {
  CompositionData,
  CompositionTableService,
} from '../services/composition.service';

@Component({
  selector: 'app-composition',
  template: `
    <app-search-bar [control]="tableService.searchControl"></app-search-bar>
    @if (
      {
        data: tableService.tableData$ | async,
        search: tableService.tableSearch$ | async
      };
      as vm
    ) {
      <app-data-table
        [data]="vm.data || []"
        [filter]="vm.search || ''"
        [schema]="tableService.tableSchema"
      ></app-data-table>
    }
  `,
  styleUrls: ['./composition.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchBarComponent, DataTableComponent],
  providers: [
    {
      provide: AbstractTableService,
      useClass: CompositionTableService,
    },
  ],
})
export class CompositionComponent {
  public tableService = inject(AbstractTableService<CompositionData>);
}
