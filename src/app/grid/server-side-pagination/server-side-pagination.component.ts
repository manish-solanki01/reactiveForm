import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridReadyEvent, IGetRowsParams, RowModelType } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-server-side-pagination',
  templateUrl: './server-side-pagination.component.html',
  styleUrls: ['./server-side-pagination.component.scss']
})

export class ServerSidePaginationComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData!: any;
  public rowHeight = 50;

  // For server side pagination...
  public rowModelType: RowModelType = 'infinite';
  public paginationPageSize = 10;
  public cacheBlockSize = 10;

  public columnDefs: ColDef[] = [
    { headerName: 'User Id', field: 'id' },
    { headerName: 'First Name', field: 'first_name', filter: 'agTextColumnFilter' },
    { headerName: 'Last Name', field: 'last_name', filter: 'agTextColumnFilter' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Company', field: 'company' }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 90,
    resizable: true,
    sortable: true
  };

  constructor(private http: HttpClient, public gridService: GridService) {

    this.gridOptions = {
      columnDefs: this.columnDefs,
      defaultColDef: this.defaultColDef,
      rowData: this.rowData,
      
      // For server side pagination...
      serverSideInfiniteScroll: true,
      rowModelType: this.rowModelType,
      pagination: true,
      paginationPageSize: this.paginationPageSize,
      cacheBlockSize: this.cacheBlockSize,

      rowSelection: 'multiple',
      animateRows: true,
      rowHeight: this.rowHeight,
      onGridReady: event => this.onGridReady(event)
    }

  }

  ngOnInit(): void {

  }

  onGridReady(params: GridReadyEvent) {

    console.log('On Grid Ready');

    var datasource = {
      getRows: (params: IGetRowsParams) => {

        console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        console.log(params);

        this.gridService.getUsers(params)
          .subscribe((data:any) => { 
            console.log("data", data);
            params.successCallback(data['users'], data['totalRecords']) 
          });
      }
    }

    this.gridOptions.api?.setDatasource(datasource);
    
  }

}


