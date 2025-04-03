console.log('Exercise 1 Variables & Data Types');

let myName = 'Joe';
let age = 35;
let pi = 3.14;
console.log(`${myName} // ${age} // ${pi}`);

console.log('Exercise 2 Basic Operations');

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}
console.log();

let string = '99';
// parseInt(string);

console.log(`${add(5, 7)} // ${multiply(5, 7)} // ${add(parseInt(string), 200)}`);

console.log('Exercise 3 Conditional Statements');

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

function scoreGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    } else {
        return 'C';
    }
}

console.log(`${evenOrOdd(9)} // ${scoreGrade(95)}`);

console.log('Exercise 4 Loops');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let number = 2; 

while (number <= 20) {
    console.log(`${number} even numbers only`); 
    number += 2; 
}

function fibonacci() {
    
} 





