export interface PaymentPlan  {
    mortgageAmount: number,
    interestRate: number,
    period: number,//months, convert years
    frequency: PaymentFrequency
    term: number
}

export interface PrePaymentPlan  {
    prePaymentAmount: number,
    frequency: PrePaymentFrequency,
    startPayment: number
}

export enum PaymentFrequency {
    Weekly = 52,
    BiWeekly = 26,
    SemiMonthly = 24,
    Monthly = 12,
    Yearly = 1,
}

export enum PrePaymentFrequency {
    OneTime,
    EachYear,
    SameAsRegular
}

export interface output{
    totalYears: number,
    totalPaymentAmount: number,
    interest: number,
    principal: number,
    totalAmount: number,
    averagePayment: number,
    averageAmortizePayment: number 
}

export interface intrestModel{ 
    principal: number; 
    time: number; 
    rate: number; 
    numberOfPayments: number; 
}