import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponentModule } from 'src/app/shared/ui/search-bar/search-bar.component';
import { ExampleComponent } from './example.component';
import { DataTableComponentModule } from 'src/app/shared/ui/data-table/data-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchBarComponentModule,
    DataTableComponentModule,
    MaterialModule,
    ExampleRoutingModule,
  ],
  declarations: [ExampleComponent],
})
export class ExampleModule {}