import * as payModels from '../app/models';

export const paymentmockmodel = {
    mortgageAmount: 100000,
    interestRate: 5,
    period: 120,
    frequency: payModels.PaymentFrequency.Weekly,
    term: 5
  };

export const prePaymentmockmodel = {
    prePaymentAmount: 0,
    startPayment: 1,
    frequency: payModels.PrePaymentFrequency.OneTime,
  };

export const intrestMockData = [
  {
    description: '$100,000 loan for 1 year monthly at 5%',
    model: {
      principal: 100000,
      time: 1,
      rate: 5,
      numberOfPayments: payModels.PaymentFrequency.Monthly
    } as payModels.intrestModel,
    interest: 5116.19,
    totalAmount: 105116.19
  },
  {
    description: '$10,000.00 loan for 7.5 years monthly at 3.875%',
    model: {
      principal: 10000,
      time: 7.5,
      rate: 3.875,
      numberOfPayments: payModels.PaymentFrequency.Monthly*7.5
    } as payModels.intrestModel,
    interest: 3371.79,
    totalAmount: 13371.79
  },
  {
    description: '$200,000.00 loan for 8 years weekly at 3%',
    model: {
      principal: 200000,
      time: 8,
      rate: 3,
      numberOfPayments: payModels.PaymentFrequency.Weekly*8
    } as payModels.intrestModel,
    interest: 54247.63,
    totalAmount: 254247.63
  }
]