window.calculator = (function interestCalculator() {
    'use strict';

    let rate;
    let years;

    function setRate(r) {
        rate = r;
    }
    function setYears(y) {
        years = y;
    }
    function calculateInterest(principal) {
        let p = principal;
        for (let i = 0; i < years; i++) {
            p += p * rate;
        }
        return p - principal;
    }
    return {
        setRate,
        setYears,
        calculateInterest
    };
}());
