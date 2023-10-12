import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AbstractTableService } from "src/app/shared/data-access/data-table.service";

export type CompositionData = {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'any'
})
export class CompositionTableService<CompositionData> extends AbstractTableService<CompositionData> {
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
        ] as CompositionData[]);
    }
}