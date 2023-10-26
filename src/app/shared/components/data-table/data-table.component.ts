import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export type ColumnsSchema = {
  key: string,
  label: string,
};

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
  ]
})
export class DataTableComponent<T> implements OnInit, AfterViewInit {
  @Input() set data(data: T[]) {
    this.dataSource.data = data;
  }
  @Input() set filter(searchTerm: string) {
    this.dataSource.filter = searchTerm.trim().toLowerCase();
  }
  @Input() schema: ColumnsSchema[] = [];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  pageSizeOptions: number[] = [5, 10, 25, 50];
  
  ngOnInit(): void {
    this.displayedColumns = this.schema.map((column) => column.key);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}