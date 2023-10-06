import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AbstractTableService } from "src/app/shared/page-base/table-page/data-table.service";

export type ExampleCustomData = {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'any'
})
export class ExampleTableService<ExampleCustomData> extends AbstractTableService<ExampleCustomData> {
    tableData$ = this.getAll();

    getAll(): Observable<ExampleCustomData[]> {
        return of([
            {
                id: 1,
                name: 'TEST1'
            },
            {
                id: 2,
                name: 'TEST2'
            },
        ] as ExampleCustomData[]);
    }
}