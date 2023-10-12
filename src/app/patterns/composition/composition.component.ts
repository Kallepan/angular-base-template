import { Component, inject } from '@angular/core';
import { AbstractTableService } from 'src/app/shared/page-base/table-page/data-table.service';
import { CompositionData, CompositionTableService } from './data-access/composition';
import { CompositionModule } from './composition.module';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';
import { DataTableComponentModule } from 'src/app/shared/ui/data-table/data-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-composition',
  template: `
    <app-search-bar [control]="tableService.searchControl"></app-search-bar>
    <app-data-table
      *ngIf="{data: tableService.tableData$ | async, search: tableService.tableSearch$ | async} as vm;"
      [data]="vm.data || []"
      [filter]="vm.search || ''"
      [schema]="tableService.tableSchema"
    ></app-data-table>`,
  styleUrls: ['./composition.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CompositionModule,
    SearchBarComponentModule,
    DataTableComponentModule,
  ],
  providers: [
    {
      provide: AbstractTableService,
      useClass: CompositionTableService
    }
  ]
})
export class CompositionComponent {
  public tableService = inject(AbstractTableService<CompositionData>);
}
