import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];

}

@NgModule({
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
})
export class DataTableComponentModule {}