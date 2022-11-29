import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MsgService } from 'src/app/shared/services/msg.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})

export class EditEmployeeComponent implements OnInit {

  id!: string;
  employee!: any;
  isAdd = true;
  form!: FormGroup;
  submitted = false;

  @ViewChild('reset', { static: false }) reset?: ElementRef<HTMLElement>;

  constructor( 
    private empService: EmployeeService, 
    private msgService: MsgService,
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      id: [uuidv4()],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      languages: ['', [Validators.required]]
    });

    if ( this.id ) {

      this.isAdd = false;

      this.employee = this.empService.find(this.id);

      this.form.patchValue(this.employee);

    }

  }

  previousState(): void {
    window.history.back();
  }

  // convenience getter for easy access to form fields

  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    
    if( this.id !== undefined ) {
      this.editEmployee();
    } else {
      this.addEmployee();
    }

  }

  addEmployee() {
    this.empService.create(this.form.value);
    this.router.navigate(['employees']);
  }

  editEmployee() {
    this.empService.update(this.id, this.form.value);
    this.router.navigate(['employees']);
  }

  resetFields(): void {
    if (this.reset) {
      const el: HTMLElement = this.reset.nativeElement;
      el.click();
    }
  }

}
