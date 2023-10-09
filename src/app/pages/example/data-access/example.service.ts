import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AbstractTableService } from "src/app/shared/page-base/table-page/data-table.service";

export type ExampleData = {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'any'
})
export class ExampleTableService<ExampleData> extends AbstractTableService<ExampleData> {
    tableSchema = [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'name',
            label: 'Name'
        },
    ];
    tableData$ = this.getAll();

    getAll() {
        return of([
            {
                id: 1,
                name: 'TEST1'
            },
            {
                id: 2,
                name: 'TEST2'
            },
        ] as ExampleData[]);
    }
}