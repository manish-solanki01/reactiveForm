import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { CellBrandComponent } from './custom-cells/cell-brand/cell-brand.component';

import 'ag-grid-enterprise';
import { CellWithButtonComponent } from './custom-cells/cell-with-button/cell-with-button.component';
import { ServerSidePaginationComponent } from './server-side-pagination/server-side-pagination.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'serverSidePagination', component: ServerSidePaginationComponent }
];

@NgModule({
  declarations: [
    GridComponent,
    CellBrandComponent,
    CellWithButtonComponent,
    ServerSidePaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule,
    AgGridModule
  ]
})
export class GridModule { }
