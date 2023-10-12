import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';
import { DataTableComponentModule } from 'src/app/shared/ui/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    SearchBarComponentModule,
    DataTableComponentModule,
  ],
})
export class CompositionModule {}