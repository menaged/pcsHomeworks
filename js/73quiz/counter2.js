window.app = window.app || {};
window.app.theCounter = (function () {
    'use strict';

    let i = 0;

    return {

        increment: () => i++,
        getCurrentCount: () => i++
    };
}());

// const theCounter =  counter();
for (let i = 0; i < 5; i++) {
    window.app.theCounter.increment();
}
console.log(window.app.theCounter.getCurrentCount());