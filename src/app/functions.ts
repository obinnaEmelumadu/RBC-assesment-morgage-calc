import { intrestModel, PaymentFrequency } from './models'

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