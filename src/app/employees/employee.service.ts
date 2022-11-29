import { Injectable } from '@angular/core';
import { Init } from './employee-init';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService extends Init {

  constructor() {
    super();
    this.load();
  }

  find(id: any) {
    let emps = JSON.parse(localStorage.getItem('employees')!);
    const emp = emps.find((emp:any) => emp.id == id);
    return emp;
  }

  getEmployees() {
    let emp = JSON.parse(localStorage.getItem('employees')!);
    return emp;
  }

  create(newEmp: any) {
    let emps = JSON.parse(localStorage.getItem('employees')!);
    emps.push(newEmp);
    localStorage.setItem('employees', JSON.stringify(emps));
  }

  update(id:any, newEmp:any) {
    let emps = JSON.parse(localStorage.getItem('employees')!);

    for (let i = 0; i < emps.length; i++) {
      if (emps[i].id == id) {
        emps[i] = newEmp;
      }
    }
    localStorage.setItem('employees', JSON.stringify(emps));
  }

  delete(id: any) {
    let emps = JSON.parse(localStorage.getItem('employees')!);
    for (let i = 0; i < emps.length; i++) {
      if (emps[i].id == id) {
        emps.splice(i, 1);
      }
    }
    localStorage.setItem('employees', JSON.stringify(emps));
  }

}