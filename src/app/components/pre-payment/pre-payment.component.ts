import { Component, OnInit } from '@angular/core';
import { PrePaymentFrequency } from 'src/app/models';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-pre-payment',
  templateUrl: './pre-payment.component.html',
  styleUrls: ['./pre-payment.component.scss']
})
export class PrePaymentComponent implements OnInit {
  prepaymentFrequency = PrePaymentFrequency;
  prepaymentForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.prepaymentForm = new FormGroup({
      prePaymentAmount: new FormControl(0.00,[
        Validators.required,
        Validators.min(0.00),
      ]),
      frequency: new FormControl(PrePaymentFrequency.OneTime,[
        Validators.required,
        Validators.min(0.00),
        Validators.max(100.00),
      ]),
      startPayment: new FormControl(1,[
        Validators.required,
        Validators.min(0),
      ]),

    });
  }

  getValue(){
    return (this.prepaymentForm.valid) ? this.prepaymentForm.value : null;
  }

}
