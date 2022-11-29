import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellWithButtonComponent } from './cell-with-button.component';

describe('Cell With Button Component', () => {
  let component: CellWithButtonComponent;
  let fixture: ComponentFixture<CellWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellWithButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
