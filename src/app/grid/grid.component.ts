import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CellWithButtonComponent, MyCellParams } from './custom-cells/cell-with-button/cell-with-button.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData$!: Observable<any[]>;
  public rowHeight = 50;

  public columnDefs: ColDef[] = [
    {
      field: 'make',
      headerName: 'Brand',
      cellRenderer: CellWithButtonComponent,
      cellRendererParams: {
        buttonText: 'Brand info'
      } as MyCellParams
    },
    {
      field: 'model',
      cellRenderer: CellWithButtonComponent,
      cellRendererParams: {
        buttonText: 'Model info'
      }
    },
    {
      field: 'price',
      cellRenderer: (params: ICellRendererParams) => {
        return `Rs. <b>${params.value}</b>/-`;
      },
      width: 300
    }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {

    this.gridOptions = {
      columnDefs: this.columnDefs,
      defaultColDef: this.defaultColDef,
      // rowData: this.rowData,
      rowSelection: 'multiple',
      animateRows: true,
      rowHeight: this.rowHeight,
      onGridReady: event => this.onGridReady(event),
      onCellClicked: event => this.onCellClicked(event),
      onRowClicked: event => console.log('A row was clicked'),
      onColumnResized: event => console.log('A column was resized'),
    }

  }

  ngOnInit(): void {

  }

  onGridReady(params: GridReadyEvent) {

    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');

    // this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json').subscribe({
    //   next: (res: any) => {
    //     this.rowData = res;
    //   },
    //   error: (err: any) => {
    //     console.log("err", err);
    //   }
    // });
    
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('Cell clicked', e);
  }

  clearSelection(): void {
    this.gridOptions.api!.deselectAll();
  }

}
