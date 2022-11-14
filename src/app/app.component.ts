import { Component } from '@angular/core';
import * as payModels from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paymentPlan!: payModels.PaymentPlan;
  prePaymentPlan!: payModels.PrePaymentPlan;
  showCalc = false;
}
