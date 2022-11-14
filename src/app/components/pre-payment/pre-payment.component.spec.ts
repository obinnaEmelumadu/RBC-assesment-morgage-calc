import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrePaymentFrequency, PrePaymentPlan } from '../../models';

import { PrePaymentComponent } from './pre-payment.component';

describe('PrePaymentComponent', () => {
  let component: PrePaymentComponent;
  let fixture: ComponentFixture<PrePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a value for getValue()', () => {
    const mockPrepayValue: PrePaymentPlan = {
      frequency: PrePaymentFrequency.OneTime,
      prePaymentAmount: 0,
      startPayment: 1
    }
    const value =  component.getValue();
    
    expect(value).toEqual(mockPrepayValue);
  });
});
