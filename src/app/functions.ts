import { intrestModel, output, PaymentFrequency, 
    PaymentPlan, PrePaymentFrequency, PrePaymentPlan } from './models'

export function calculatePeriod( periodYears: number, periodMonths: number){
    const periodInMonths  = (periodYears*12) + periodMonths;
    return periodInMonths;
}

export function calcPeriodAmount(period: number, frequency: PaymentFrequency){
    return period * (frequency/12);
}
export function calculateTotalYears(time: number){
    return time / 12;
}

/**
 * A function to calculate compound intrest 
 * courtesy https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
 *
 * @param {{ principal: number, time: number, rate: number, numberOfPayments: number }} model
 * @returns {interest: number, totalAmount: number}
 */
export function calcIntrestAndTotal (
        { principal, time, rate, numberOfPayments }: intrestModel
        ): number[]  {
    const totalAmount = principal * (Math.pow(
                                    (1 + (rate / (numberOfPayments*100)))
                                    , (numberOfPayments * time)));
    const interest = totalAmount - principal;
    return [interest, principal, totalAmount];
 };

export function calcMortgagePayment(totalAmount: number, termNumber: number){
    return totalAmount / termNumber;
}
export function calcAmortiMortgagePayment(totalAmount: number, PeriodNumber: number){
    return totalAmount / PeriodNumber;
}

export function applyPrepayment(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan, ){
    if (prePaymentPlan.prePaymentAmount >= paymentPlan.mortgageAmount) {
        alert('The Prepayment amount must not be greater than the principal');
      }
    else{
        let period = paymentPlan.period;
        let amount = paymentPlan.mortgageAmount;
        let rate =prePaymentPlan.frequency == PrePaymentFrequency.EachYear ?
        12 : period;

        for (let i = period; i > 0; i -= rate) {
        amount -= prePaymentPlan.prePaymentAmount;
        if (amount <= 0) {
            alert(
            `A pre-payment of $${paymentPlan.mortgageAmount} over ${paymentPlan.period} months will pay back this debt`
            );
        }
        }
        paymentPlan.mortgageAmount = amount;
    }
    return paymentPlan;
}

export function calculateOutputModel(paymentPlan: PaymentPlan){
    const output = {} as output;

    output.totalYears = calculateTotalYears(
        paymentPlan.period
      );
  
      output.totalPaymentAmount = calcPeriodAmount(
        paymentPlan.period,
        paymentPlan.frequency
      );
  
      [output.interest, output.principal, output.totalAmount] =
        calcIntrestAndTotal({
          principal: paymentPlan.mortgageAmount,
          time: output.totalYears,
          rate: paymentPlan.interestRate,
          numberOfPayments: paymentPlan.frequency,
        });
  
      output.averagePayment = calcMortgagePayment(
        output.totalAmount,
        paymentPlan.term
      );
  
      output.averageAmortizePayment = calcAmortiMortgagePayment(
        output.totalAmount,
        output.totalPaymentAmount
      );

    return output;
}