import { Component, inject } from '@angular/core';
import { AbstractTableService } from 'src/app/shared/page-base/table-page/data-table.service';
import { ExampleTableService } from './data-access/example-table.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  providers: [
    {
      provide: AbstractTableService,
      useClass: ExampleTableService
    }
  ]
})
export class ExampleComponent {
  public tableService = inject(AbstractTableService);
}
