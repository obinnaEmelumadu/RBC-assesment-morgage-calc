import { Component, OnInit } from '@angular/core';
import { PrePaymentFrequency } from 'src/app/models';

@Component({
  selector: 'app-pre-payment',
  templateUrl: './pre-payment.component.html',
  styleUrls: ['./pre-payment.component.scss']
})
export class PrePaymentComponent implements OnInit {
  prepaymentFrequency = PrePaymentFrequency;
  constructor() { }

  ngOnInit(): void {
  }

}
