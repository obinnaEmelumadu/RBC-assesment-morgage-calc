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
      if (this.prePaymentPlan) {
        this.prePaymentPlan.prePaymentAmount != 0
          ? this.applyPrepayment()
          : null;
      }

      this.calculateOutputModel();

      this.showCalc = true;
    }
  }

  applyPrepayment() {
    if (
      this.prePaymentPlan.prePaymentAmount >= this.paymentPlan.mortgageAmount
    ) {
      alert('The Prepayment amount must not be greater than the principal');
      return;
    }

    let period = this.paymentPlan.period;
    let amount = this.paymentPlan.mortgageAmount;
    let rate =
      this.prePaymentPlan.frequency == payModels.PrePaymentFrequency.EachYear
        ? 12
        : period;

    for (let i = period; i > 0; i -= rate) {
      amount -= this.prePaymentPlan.prePaymentAmount;
      if (amount <= 0) {
        alert(
          `A pre-payment of $${this.paymentPlan.mortgageAmount} over ${this.paymentPlan.period} months will pay back this debt`
        );
        return;
      }
    }

    this.paymentPlan.mortgageAmount = amount;
  }
  calculateOutputModel() {
    this.output.totalYears = payFunctions.calculateTotalYears(
      this.paymentPlan.period
    );

    this.output.totalPaymentAmount = payFunctions.calcPeriodAmount(
      this.paymentPlan.period,
      this.paymentPlan.frequency
    );

    [this.output.interest, this.output.principal, this.output.totalAmount] =
      payFunctions.calcIntrestAndTotal({
        principal: this.paymentPlan.mortgageAmount,
        time: this.output.totalYears,
        rate: this.paymentPlan.interestRate,
        numberOfPayments: this.paymentPlan.frequency,
      });

    this.output.averagePayment = payFunctions.calcMortgagePayment(
      this.output.totalAmount,
      this.paymentPlan.term
    );

    this.output.averageAmortizePayment = payFunctions.calcAmortiMortgagePayment(
      this.output.totalAmount,
      this.output.totalPaymentAmount
    );
  }
}
