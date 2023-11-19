(function () {
    'use strict';

    function createAccount(openingBalance) {
        return 
        balance: openingBalance,
        

    };
    
    function transaction(amount) {
        this.balance += amount;
    }
}());

const checking = createAccount(350);
const savings = createAccount(100);

transaction.call(checking, 50)
transaction.call(savings, 50)
transaction.call(savings, -50)