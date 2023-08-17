'use strict'

console.log('The formula to calculate Celsius to Farenheit is:');
console.log('(C / 5) * 9 + 32');
console.log('And to calculate from Farenheit to Celsius is:');
console.log('(F - 32) * 5 / 9 ');

var farenheit = prompt('Type a degree in Farenheit');
var celsius = prompt('Type a degree in Celsius');

alert(`${(farenheit - 32) * 5 / 9 } Celsius`);
alert (`${(celsius / 5) * 9 + 32 } Farenheit`);



// let formula = function((${celsius} / 5) * 9 + 32){
//     return()
// }