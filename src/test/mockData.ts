import * as payModels from '../app/models';

export const paymentmockmodel = {
    mortgageAmount: 500,
    interestRate: 5,
    period: 99,
    frequency: payModels.PaymentFrequency.Weekly,
    term: 6
  };

export const prePaymentmockmodel = {
    prePaymentAmount: 500,
    startPayment: 5,
    frequency: payModels.PrePaymentFrequency.OneTime,
  };

export const intrestMockData = {
  model: {
    principal: 100000,
    time: 1,
    rate: 5,
    numberOfPayments: 12
  } as payModels.intrestModel,
  interest: 5116.18,
  totalAmount: 105116.18
};