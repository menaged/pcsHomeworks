console.log('Exercise 1 Variables & Data Types');

let myName = 'Olivia';
let age = 25;
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

function fibonacciSequence(n) {
    const sequence = [0, 1];
    if (n <= 2) return sequence.slice(0, n);
    for (let i = 2; i < n; i++) {
        const nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum);
    }
    return sequence;
}

console.log(fibonacciSequence(10));

console.log('Exercise 5 Arrays');

let fruits = ['apple', 'orange', 'banana', 'pear', 'stawberry'];


let firstFruit = fruits.at(0);
let lastFruit = fruits.at(-1); //Last in the array
console.log(lastFruit);
console.log(firstFruit);

const arraysOfNumbers = [12, 32, 54, 45, 78, 66];
console.log(arraysOfNumbers);

function someNumbers(arr) {

    function sumArrayForEach(arr) {
        let sum = 0;
        arr.forEach(arraysOfNumbers => {
            sum += arraysOfNumbers;
        });
        return sum;
    }

    const sumForEach = sumArrayForEach(arraysOfNumbers);
    console.log(sumForEach); // Output: 15
}

function arraySum(array) {
    let total = 0,
        len = array.length;

    for (let i = 0; i < len; i++) {
        total += array[i];
    }
    return total;
}

let my_array = [1, 2, 3, 4];

console.log(arraySum(my_array));

const students = {
    name: 'Ethan',
    age: 20,
    grade: [80, 90, 100]
};
console.log(students);

console.log('Exercise 6 Methods');

const double = arraysOfNumbers.map((x) => x * 2);
console.log(double);
const filter = arraysOfNumbers.filter((x) => x > 10);
console.log(filter);

const total = arraysOfNumbers.reduce(arrayReduce);

function arrayReduce(accumulator, element) {
    return accumulator + element;
}

console.log(total);

console.log('Exercise 7 Functions');

function makesFunctions() {

}

const sumFunction = (xa, ya) => (xa + ya);

console.log(sumFunction(23, 33));

console.log('Exercise 8 DOM manipulation');
console.log('Exercise 9 Asynchronous JavaScript');

setTimeout(() => {
    console.log('I appear here after 3 seconds');
}, 3000);


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => console.log(response))
    .catch(error => console.error(error));

function print() {
    console.log('Hello World');
}

setTimeout(print, 5000);

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}

for (let = i; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}



