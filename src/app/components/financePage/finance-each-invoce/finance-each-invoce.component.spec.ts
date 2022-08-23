import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEachInvoceComponent } from './finance-each-invoce.component';

describe('FinanceEachInvoceComponent', () => {
  let component: FinanceEachInvoceComponent;
  let fixture: ComponentFixture<FinanceEachInvoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceEachInvoceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceEachInvoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
