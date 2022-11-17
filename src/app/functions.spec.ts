import { intrestMockData, paymentmockmodel, prePaymentmockmodel } from 'src/test/mockData';
import * as functions from './functions';
import * as models from './models';


describe('functions', () => {
    describe('calculatePeriod', () => {
      it('should return the time in months', () => {
        const year = 2;
        const month = 2;

        const calc = functions.calculatePeriod(year,month);
  
        expect(calc).toEqual(26);
      });
    });

    describe('calcPeriodAmount', () => {
      it('should return number of payments based on the PaymentFrequency', () => {
        const preiod = 12;
        const freq = models.PaymentFrequency.Weekly;

        const amount = functions.calcPeriodAmount(preiod,freq);
  
        expect(freq).toEqual(52);
      });
    });

    describe('calculateTotalYears', () => {
      it('should return number of years based on the months', () => {
        const year = 24;

        const amount = functions.calculateTotalYears(year);
  
        expect(amount).toEqual(2);
      });
    });

    describe('calcMortgagePayment', () => {
      it('should return average morgage payment based on term', () => {
        const total = 105122.06;
        const payments = 26;

        const amount = functions.calcMortgagePayment(total, payments);
  
        expect(amount).toBeCloseTo(4043.16,1);
      });
    });

    describe('calcAmortiMortgagePayment', () => {
      it('should return average morgage payment based on period', () => {
        const total = 105122.06;
        const payments = 26;

        const amount = functions.calcAmortiMortgagePayment(total, payments);
  
        expect(amount).toBeCloseTo(4043.16,1);
      });
    });

    describe('calcIntrestAndTotal ', () => {
      intrestMockData.forEach(element => {
        it(element.description, () => {
          const [interest, principal, totalAmount] = functions.calcIntrestAndTotal (element.model);
    
          expect(totalAmount).toBeCloseTo(element.totalAmount,1);
          expect(principal).toBeCloseTo(element.principal,1);
          expect(interest).toBeCloseTo(element.interest,1);
        });
      });
    });

    describe('applyPrepayment ', () => {
      let paymentPlan = {...paymentmockmodel} as models.PaymentPlan;
      let prePaymentPlan = {...prePaymentmockmodel} as models.PrePaymentPlan;
      it('applyPrepayment should alert if prePaymentAmount  is too high', () => {
        paymentPlan = {...paymentmockmodel} as models.PaymentPlan;
        prePaymentPlan.prePaymentAmount = 2100000;
        spyOn(window, 'alert');
    
        functions.applyPrepayment(paymentPlan, prePaymentPlan);
        expect(window.alert).toHaveBeenCalledWith(
          'The Prepayment amount must not be greater than the principal'
        );
      });
    
      it('applyPrepayment should reduce the mortgageAmount by 2000', () => {
        paymentPlan = {...paymentmockmodel} as models.PaymentPlan;
        prePaymentPlan = {
          prePaymentAmount: 20000,
          startPayment: 1,
          frequency: models.PrePaymentFrequency.OneTime,
        } as models.PrePaymentPlan;
    
        functions.applyPrepayment(paymentPlan, prePaymentPlan);
        expect(paymentPlan.mortgageAmount).toBe(80000);
      });
    
      it('applyPrepayment should alert if prepaument is too high', () => {
        paymentPlan = {...paymentmockmodel} as models.PaymentPlan;
        prePaymentPlan = {...prePaymentmockmodel} as models.PrePaymentPlan;
        prePaymentPlan.prePaymentAmount = 20000;
        prePaymentPlan.frequency = models.PrePaymentFrequency.EachYear;
        spyOn(window, 'alert');
        functions.applyPrepayment(paymentPlan, prePaymentPlan);
        expect(window.alert).toHaveBeenCalled();
      });
    });
  });