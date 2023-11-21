'use strict';

function arrayLetters(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}
const lettersUp = ['J', 'K', 'L'];
const lettersLow = ['j', 'k', 'l'];

function upper(char) {
    return char.toUpperCase() === char;
}
function some(char) {
    return char.toUpperCase() === char;

}
console.log(arrayLetters(lettersUp, upper));
console.log(arrayLetters(lettersLow, upper));

console.log(arrayLetters(lettersUp, some));
console.log(arrayLetters(lettersLow, some));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));
console.log(multiply(4, 5));
multiply(10, 8);

function multipler(a) {
    return function (b) {
        return a * b;
    };
}
console.log(multipler(8)(6));
