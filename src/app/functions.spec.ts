import { intrestMockData } from 'src/test/mockData';
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
      // it('should return coumpund intrest and the total', () => {
      //   const [interest, totalAmount] = functions.calcIntrestAndTotal (intrestMockData.model);
  
      //   expect(totalAmount).toBeCloseTo(intrestMockData.totalAmount,1);
      //   expect(interest).toBeCloseTo(intrestMockData.interest,1);
      // });
      intrestMockData.forEach(element => {
        it(element.description, () => {
          const [interest, principal, totalAmount] = functions.calcIntrestAndTotal (element.model);
    
          expect(totalAmount).toBeCloseTo(element.totalAmount,1);
          expect(principal).toBeCloseTo(element.principal,1);
          expect(interest).toBeCloseTo(element.interest,1);
        });
      });
    });
  });