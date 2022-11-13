import { Component, OnInit } from '@angular/core';
import { PaymentFrequency } from '../../models';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentFrequency = PaymentFrequency;
  constructor() { }

  ngOnInit(): void {
  }

}
