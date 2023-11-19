console.log(farenheit(32));
console.log(celsius(0));
console.log(farenheit(212));
console.log(celsius(100));

let userInput = prompt('Give me a degree in farenheit:');
alert('The degrees you gave in farenheit are ' + farenheit(userInput) + ' in celsius');
userInput = prompt('Give me a degree in celsius:');
alert('The degrees you gave in celsius are ' + celsius(userInput) + ' in farenheit');

function farenheit(c) {
    'use strict';

    return (c - 32) * 5 / 9;
}

function celsius(f) {
    'use strict';

    return (f / 5 * 9 + 32);
}

