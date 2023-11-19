/* global calculator */

(function () {
    
    'use strict';
    
    calculator.setRate(.3);
    calculator.setYears(30);
    console.log(calculator.calculateInterest(1000));

}());