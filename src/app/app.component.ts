import { Component } from '@angular/core';
import * as payModels from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paymentPlan:payModels.PaymentPlan = {
    morgageAmount: 0,
    intrestRate: 0,
    period: 0,
    frequency: payModels.PaymentFrequency.Weekly,
    term: 0
  }
  prePaymentPlan:payModels.PrePaymentPlan = {
    prePaymentAmount: 0,
    frequency: payModels.PrePaymentFrequency.OneTime,
    startPayment: 0
  }
  showCalc = false;
}
