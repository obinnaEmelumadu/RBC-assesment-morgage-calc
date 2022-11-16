import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentFrequency, PaymentPlan } from '../../models';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a value for getValue()', () => {
    const mockPrepayValue: PaymentPlan = {
      frequency: PaymentFrequency.Monthly,
      interestRate: 5,
      mortgageAmount: 100000,
      period: 120 ,
      term: 5
    }
    const value =  component.getValue();
    
    expect(value).toEqual(mockPrepayValue);
  });

  it('should return null for getValue()', () => {
    component.paymentForm.get('interestRate')?.setValue(101);
    const value =  component.getValue();
    
    expect(value).toEqual(null);
  });
  
  it('setPeriod should set the period to the months returned by calculatePeriod', () => {
    let p = component.paymentForm.get('period')?.value;
    expect(p).toEqual(120 );

    component.periodYears = 10;
    component.periodMonths = 5;
    component.setPeriod();

    let p2 = component.paymentForm.get('period')?.value;

    expect(p2).not.toEqual(p);
    expect(p2).toEqual(125);
  });

  it('onChangeMonths should set Month', () => {
    component.onChangeMonths("3");

    expect(component.periodMonths).toEqual(3);
  });

  it('onChangeyears should set year', () => {
    component.onChangeYears("3");

    expect(component.periodYears).toEqual(3);
  });
});
