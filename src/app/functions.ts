import { PaymentFrequency } from './models'

export function calculatePeriod( periodYears: number, periodMonths: number){
    const newPeriod  = (periodYears*12) + periodMonths;
    return newPeriod
}

// return based on frequency
export function calcPeriodAmount(period: number, frequency: PaymentFrequency){
    return period * (frequency/12);
}
//return based on frequency
export function calculateTotalYears(time: number){
    return time / 12;
}

//calcIntrest()Use the compund intrest calculator based on frequency (CI = P*(1 + R/n) (nt) – P)
// numberOfPayments = Number of Times interest is paied per year/unit
// rate = percent (not decimal)
// time =  in years
export function calcIntrestAndTotal ( principal: number, time: number, 
                                    rate: number, numberOfPayments: number)  {
    const totalAmount = principal * (Math.pow(
                                    (1 + (rate / (numberOfPayments*100)))
                                    , (numberOfPayments * time)));
    const interest = totalAmount - principal;
    return [interest, totalAmount];
 };

//calcMortgagePayment() total/termNumber
export function calcMortgagePayment(totalAmount: number, termNumber: number){
    return totalAmount / termNumber;
}
//calcAmortizationMortgagePayment() total/PeriodNumber
export function calcAmortiMortgagePayment(totalAmount: number, PeriodNumber: number){
    return totalAmount / PeriodNumber;
}