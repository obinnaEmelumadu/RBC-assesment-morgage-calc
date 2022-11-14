import { PaymentFrequency } from './models'

export function calculatePeriod( periodYears: number, periodMonths: number){
    const newPeriod  = (periodYears*12) + periodMonths;
    return newPeriod
}

//calculateTerm(term: number, frequency) return based on frequency
export function calculateTerm(term: number, frequency: PaymentFrequency){
    return term * frequency;
}
//calcAmortizationPeriod(period: number, frequency) return based on frequency
export function calcAmortizationPeriod(period: number, frequency: PaymentFrequency){
    return period * frequency;
}

//calcIntrest()Use the compund intrest calculator based on frequency (CI = P*(1 + R/n) (nt) – P)
// n = Number of Times interest is paied per year/unit
// rate = percent (not decimal)
export function calcIntrestAndTotal (
        principal: number, time: number, 
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