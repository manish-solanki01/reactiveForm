import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-brand',
  template: `
    # {{value}}
  `,
  styles: [
  ]
})

export class CellBrandComponent implements OnInit, ICellRendererAngularComp {

  value: any;

  constructor() { }

  ngOnInit(): void {

  }

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

}
