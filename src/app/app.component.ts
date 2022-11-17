import { Component, ViewChild } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { PrePaymentComponent } from './components/pre-payment/pre-payment.component';
import * as payModels from './models';
import * as payFunctions from './functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  paymentPlan!: payModels.PaymentPlan;
  prePaymentPlan!: payModels.PrePaymentPlan;
  output!: payModels.output;
  showCalc = false;

  @ViewChild('payment') payment!: PaymentComponent;
  @ViewChild('prepayment') prepayment!: PrePaymentComponent;

  setPaymentPlan(values: any) {
    const obj = values ? { ...values } : null;
    this.paymentPlan = obj as payModels.PaymentPlan;
  }

  setPrePaymentPlan(values: any) {
    const obj = values ? { ...values } : null;
    this.prePaymentPlan = obj as payModels.PrePaymentPlan;
  }

  calculateOutput() {
    this.showCalc = false;
    this.output = {} as payModels.output;

    this.setPaymentPlan(this.payment.getValue());
    this.setPrePaymentPlan(this.prepayment.getValue());

    if (this.paymentPlan) {
      if (this.prePaymentPlan && this.prePaymentPlan.prePaymentAmount != 0) {
        this.paymentPlan = payFunctions.applyPrepayment(this.paymentPlan,this.prePaymentPlan);
      }

      this.output = payFunctions.calculateOutputModel(this.paymentPlan);

      this.showCalc = true;
    }
  }
  
}
