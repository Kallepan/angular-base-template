import { Component, inject } from '@angular/core';
import { CompositionData, CompositionTableService } from './data-access/composition';
import { CommonModule } from '@angular/common';
import { AbstractTableService } from '@app/shared/data-access/data-table.service';
import { SearchBarComponent } from '@app/shared/ui/search-bar/search-bar.component';
import { DataTableComponent } from '@app/shared/ui/data-table/data-table.component';

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
    SearchBarComponent,
    DataTableComponent,
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