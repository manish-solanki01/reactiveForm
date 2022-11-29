import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'
import { ICellRendererParams } from 'ag-grid-community';

export interface MyCellParams {
  buttonText?: string;
}

@Component({
  selector: 'app-cell-with-button',
  template: `
    <button class="btn btn-outline-secondary btn-sm" (click)="onClick($event)">{{buttonText}}</button>
    <span class="mx-2">{{value}}<span>
  `,
  styles: [
  ]
})

export class CellWithButtonComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  buttonText: string = 'Default';

  constructor() { }

  ngOnInit(): void {

  }

  agInit(params: ICellRendererParams<any, any> & MyCellParams): void {
    this.value = params.value;
    this.buttonText = params.buttonText ?? 'Default';
  }

  refresh(params: ICellRendererParams<any, any> & MyCellParams): boolean {
    return false;
  }

  onClick(event: any): void {
    alert('Cell value is ' + this.value);
  }

}
