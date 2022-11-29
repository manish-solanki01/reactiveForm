import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  emps: any;
  
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.emps = this.empService.getEmployees();
  }

  deleteEmployee(emp: any) {

    if (confirm("Are you sure to delete " + emp.firstName)) {
      this.empService.delete(emp.id);
      this.load();
    }

  }

}
