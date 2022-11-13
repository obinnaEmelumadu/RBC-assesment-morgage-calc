export interface PaymentPlan  {
    morgageAmount: number,//decimal
    intrestRate: number,//percent
    period: number,//months, convert years
    frequency: PaymentFrequency
    term: number
}

export interface PrePaymentPlan  {
    prePaymentAmount: number,//decimal
    frequency: PrePaymentFrequency
    startPayment: number
}

export enum PaymentFrequency {
    Weekly = 52,
    BiWeekly = 26,
    SemiMonthly = 24,
    Monthly = 12,
}

export enum PrePaymentFrequency {
    OneTime,
    EachYear,
    SameAsRegular
}