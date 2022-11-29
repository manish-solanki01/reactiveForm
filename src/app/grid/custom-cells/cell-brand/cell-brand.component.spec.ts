import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBrandComponent } from './cell-brand.component';

describe('Cell Brand Component', () => {
  let component: CellBrandComponent;
  let fixture: ComponentFixture<CellBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
