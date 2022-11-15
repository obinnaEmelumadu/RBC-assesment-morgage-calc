import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import * as payModels from './models';
import { paymentmockmodel, prePaymentmockmodel } from '../test/mockData';
import { PaymentComponent } from './components/payment/payment.component';
import { PrePaymentComponent } from './components/pre-payment/pre-payment.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let paymentfixture: ComponentFixture<PaymentComponent>;
  let prepaymentfixture: ComponentFixture<PrePaymentComponent>;

  let app: AppComponent;
  let paymentComponet: PaymentComponent;
  let prepaymentComponet: PrePaymentComponent; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PaymentComponent,
        PrePaymentComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    paymentfixture = TestBed.createComponent(PaymentComponent);
    prepaymentfixture = TestBed.createComponent(PrePaymentComponent);

    app = fixture.componentInstance;
    paymentComponet = paymentfixture.componentInstance;
    prepaymentComponet = prepaymentfixture.componentInstance; 
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should not show the calculated table`, () => {
    expect(app.showCalc).toEqual(false);
  });

  it('setPaymentPlan should set the value of paymentPlan', () => {

    const model = {
      mortgageAmount: 500,
      interestRate: 5,
      period: 99,
      frequency: payModels.PaymentFrequency.Weekly,
      term: 6
    } as payModels.PaymentPlan;

    app.setPaymentPlan(model);

    expect(app.paymentPlan).toBe(model);
  });

  it('setPrePaymentPlan should set the value of prePaymentPlan', () => {

    const model = {
      prePaymentAmount: 500,
      startPayment: 5,
      frequency: payModels.PrePaymentFrequency.OneTime,
    } as payModels.PrePaymentPlan;

    app.setPrePaymentPlan(model);

    expect(app.prePaymentPlan).toBe(model);
  });

  it('should create instance of components', () => {
    expect(paymentComponet).toBeDefined();
    expect(prepaymentComponet).toBeDefined();
  });

  it('should calculate the output model', () => { 
    paymentComponet.getValue = ()=>{
      return paymentmockmodel;
    };
    prepaymentComponet.getValue = ()=>{
      return prePaymentmockmodel;
    };;
    app.payment = paymentComponet;
    app.prepayment = prepaymentComponet


    const paymentComponetSpy = spyOn(paymentComponet, "getValue").and.callThrough();
    const prepaymentComponetSpy = spyOn(prepaymentComponet, "getValue").and.callThrough();
    
    expect(app.showCalc).toBe(false);

    app.calculateOutput();

    expect(paymentComponetSpy).toHaveBeenCalled();
    expect(prepaymentComponetSpy).toHaveBeenCalled();
    expect(app.showCalc).toBe(true);
  });

});
