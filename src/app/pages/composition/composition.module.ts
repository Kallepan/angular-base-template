import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';
import { CompositionComponent } from './composition.component';
import { DataTableComponentModule } from 'src/app/shared/ui/data-table/data-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CompositionRoutingModule } from './composition-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchBarComponentModule,
    DataTableComponentModule,
    MaterialModule,
    CompositionRoutingModule,
  ],
  declarations: [CompositionComponent],
})
export class CompositionModule {}