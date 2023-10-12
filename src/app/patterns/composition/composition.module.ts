import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';
import { DataTableComponentModule } from 'src/app/shared/ui/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchBarComponentModule,
    DataTableComponentModule,
  ],
})
export class CompositionModule {}