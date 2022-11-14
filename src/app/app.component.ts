import { Component, ViewChild } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { PrePaymentComponent } from './components/pre-payment/pre-payment.component';
import * as payModels from './models';
import * as payFunctions from './functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paymentPlan!: payModels.PaymentPlan;
  prePaymentPlan!: payModels.PrePaymentPlan;
  output!: payModels.output;
  showCalc = false;

  @ViewChild('payment') payment!: PaymentComponent;
  @ViewChild('prepayment') prepayment!: PrePaymentComponent;

  setPaymentPlan(values: any){
    this.paymentPlan = values as payModels.PaymentPlan;
  }

  setPrePaymentPlan(values: any){
    this.prePaymentPlan = values as payModels.PrePaymentPlan;
  }

  calculateOutput(){
    this.showCalc = false;
    this.output = {} as payModels.output;

    this.setPaymentPlan(this.payment.getValue());
    this.setPrePaymentPlan(this.prepayment.getValue());

    if(this.paymentPlan){
      this.output.totalTerm = payFunctions.calculateTerm(
        this.paymentPlan.term, this.paymentPlan.frequency);
      this.output.totalPeriod = payFunctions.calculatePeriod(
        this.paymentPlan.period, this.paymentPlan.frequency
      );
      
      this.showCalc = true;
    }

  }
}
