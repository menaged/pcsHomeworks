window.interestCalculator =
    (function () {
        'use strict';

        let rate = .03;
        let years = 1;

        function calculateInterest(principalAmount) {
            //100 * (3 / 100) * 1
            return principalAmount * rate * years;

        }
        function setRate(rate) {
            this.rate = rate;
        }
        function setYears(years) {
            this.years = years;
        }

        return {
            calculateInterest,
            setRate,
            setYears
        };
    }());

window.interestCalculator.setRate(.05);
let result = window.interestCalculator.calculateInterest(100);
console.log(result);


