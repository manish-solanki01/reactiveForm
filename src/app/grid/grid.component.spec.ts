import { ComponentFixture, flush, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Grid Component', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let rowData!: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        AgGridModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {

    rowData = [
      {
        make: "Porsche",
        model: "Boxter",
        price: 72000
      },
      {
        make: "Ford",
        model: "Mondeo",
        price: 32000
      },
      {
        make: "Ford",
        model: "Mondeo",
        price: 32000
      }
    ];

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is not available until `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('grid API is available after `detectChanges`', () => {
    fixture.detectChanges();
    expect(component.gridOptions.api).toBeTruthy();
  })

  it('the grid cells should be as expected', () => {

    component.rowData$ = of(rowData);
    fixture.detectChanges();

    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.ag-cell-value');

    expect(cellElements.length).toEqual(9);
    // expect(cellElements[0].textContent).toEqual("Porsche");

  });

  it('should clear the selection when `Clear Selection` button is clicked', () => {

    spyOn(component, 'clearSelection');
    component.rowData$ = of(rowData);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement.triggerEventHandler('click', null); 

    expect(component.clearSelection).toHaveBeenCalled();
    
  });



});
