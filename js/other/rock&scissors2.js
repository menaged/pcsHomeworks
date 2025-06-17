
// let user = Math.floor(Math.random() * 3);
// let computer = Math.floor(Math.random() * 3);

// if (user === 0 && computer === 1) {
//     console.log('Computer won!');
// } else if (user === 0 && computer === 2) {
//     console.log('Player won');
// } else if (user === 1 && computer === 0) {
//     console.log('Player won');
// } else if (user === 1 && computer === 2) {
//     console.log('Computer won');
// } else if (user === 2 && computer === 0) {
//     console.log('Computer won');
// } else if (user === 2 && computer === 1) {
//     console.log('Player won');
// } else {
//     console.log('Its a draw');
// }

// if (computer === 0) {
//     computer = 'Rock';
// } else if (computer === 1) {
//     computer = 'Paper';
// } else if (computer === 2) {
//     computer = 'Scissors';
// }
// if (user === 0) {
//     user = 'Rock';
// } else if (user === 1) {
//     user = 'Paper';
// } else if (user === 2) {
//     user = 'Scissors';
// }

// console.log(`Player picked: ${user}`);
// console.log(`Computer choice: ${computer}`);

//      WHILE LOOP
// const luckyNumber = 7;

// let guess = Math.floor(Math.random() * 10) + 1;

// while (guess !== luckyNumber) {
//     console.log(`Nope, it isn't ${guess}`);
//     guess = Math.floor(Math.random() * 10) + 1;
// }
// console.log(`You got it! My lucky number is ${luckyNumber}`);

// let xNum = 0;
// for (xNum = 0; xNum < 50; xNum++) {
//     if (xNum % 2 === 0) {
//         console.log(xNum);
//         continue;
//     } else if (xNum === 43) {
//         break;
//     }
// }
// Let's use our newfound knowledge of JavaScript loops to create a program that converts an integer into its equivalent binary number.
// Note: Binary numbers are "base-2", meaning that they are represented by 0s and 1s.
// In a based - numbers.js file, create a program that starts with a myNumber variable, initialized to an integer of your choosing, followed by a binary variable set to an empty string.
//     Next, use a loop to go from myNumber to 0, reducing myNumber by half each time(i.e., Math.floor(num / 2)).
//         Let's do the following in each iteration:
// Determine if the current value of myNumber can be divided by 2.
// If so, add "0" to binary.
//     Otherwise, add "1".

let myOutput = '';

for (i = 0; i > 0; Math.floor(i / 2)) {
    if (i % 2 === 0) {
        myOutput += '0';
    } else {
        myOutput += '1';
    }
    console.log(`myNumber2: ${myNumber2}, myOutput: ${myOutput}`);
}

console.log(myOutput);

