import * as functions from './functions';

describe('functions', () => {
    describe('calculatePeriod', () => {
      it('should return the time in months', () => {
        const year = 2;
        const month = 2;

        const calc = functions.calculatePeriod(year,month);
  
        expect(calc).toEqual(26);
      });
    });
  });