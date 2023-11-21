window.myApp = window.myApp || {};

window.myApp = (function (myAppNew) {
    'use strict';

    myAppNew.a = () => console.log('model a called');

    let utils = {
        months: ['January', 'February', 'March', 'April'],

        getMonth(index) {
            return this.months[index - 1];
        },
        getMonthIndex(month) {
            for (let i = 0; i < this.months.length; i++) {
                if (this.months[i] === month) {
                    return i + 1;
                }
            }
        }
    };

}(window.myApp || {}));

window.myApp.a();



