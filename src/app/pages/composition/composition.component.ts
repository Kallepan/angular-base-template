import { Component, inject } from '@angular/core';
import { AbstractTableService } from 'src/app/shared/page-base/table-page/data-table.service';
import { CompositionData, CompositionTableService } from './data-access/example.service';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss'],
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
