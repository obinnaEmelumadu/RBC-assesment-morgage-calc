import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrePaymentComponent } from './components/pre-payment/pre-payment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OutputTableComponent } from './components/output-table/output-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PrePaymentComponent,
    PaymentComponent,
    OutputTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
