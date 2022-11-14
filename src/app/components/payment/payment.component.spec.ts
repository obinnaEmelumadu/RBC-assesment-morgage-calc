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
      period: 300,
      term: 5
    }
    const value =  component.getValue();
    
    expect(value).toEqual(mockPrepayValue);
  });
});
