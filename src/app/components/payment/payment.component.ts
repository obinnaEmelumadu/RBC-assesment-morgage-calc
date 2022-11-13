import { Component, OnInit } from '@angular/core';
import { PaymentFrequency } from '../../models';
import { calculatePeriod } from '../../functions';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentFrequency = PaymentFrequency;
  paymentForm!: FormGroup;
  periodMonths = 0;
  periodYears = 25;

  constructor() { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      mortgageAmount: new FormControl(100000.00,[
        Validators.required,
        Validators.min(0.00),
      ]),
      interestRate: new FormControl(5.00,[
        Validators.required,
        Validators.min(0.00),
        Validators.max(100.00),
      ]),
      period: new FormControl( (this.periodYears*12) + this.periodMonths,[
        Validators.required,
        Validators.min(1),
        Validators.max( (30*12)+11 ),
      ]),
      frequency: new FormControl(PaymentFrequency.Monthly,[
        Validators.required,
      ]),
      term: new FormControl(5,[
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  getValue(){
    return (this.paymentForm.valid) ? this.paymentForm.value : null;
  }

  onChangeMonths($event: string){
    const value = parseInt($event);
    this.periodMonths = value;
    this.calculatePeriod();
  }

  onChangeYears($event: string){
    const value = parseInt($event);
    this.periodYears = value;
    this.calculatePeriod();
  }

  calculatePeriod(){
    this.paymentForm.get('period')?.setValue(
      calculatePeriod(
        this.periodYears,
        this.periodMonths
      )
    );
  }

}
