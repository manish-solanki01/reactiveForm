import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'add', component: EditEmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent }
];

@NgModule({
  declarations: [
    EmployeesComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class EmployeesModule { }
