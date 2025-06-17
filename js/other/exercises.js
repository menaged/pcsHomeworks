(function () {

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

    let fruits = ['apple', 'orange', 'banana', 'pear', 'strawberry'];

    let firstFruit = fruits.at(0);
    let lastFruit = fruits.at(-1); //Last in the array
    console.log(lastFruit);
    console.log(firstFruit);

    const arraysOfNumbers = [12, 32, 54, 45, 78, 66];
    console.log(arraysOfNumbers);

    function someNumbers(arr) {

        function sumArrayForEach(arr) {
            let sum = 0;
            arr.forEach(number => {
                sum += number;
            });
            return sum;
        }

        const sumForEach = sumArrayForEach(arr);
        console.log(sumForEach); // Output: 15
    }

    someNumbers([1, 2, 3, 4, 5]);

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

    const sumFunction = (xa, ya) => (xa + ya);

    console.log(sumFunction(23, 33));

    console.log('Exercise 8 DOM manipulation');

    console.log('Exercise 9 Asynchronous JavaScript');

    // setTimeout(() => {
    //     console.log('I appear here after 3 seconds');
    // }, 3000);

    // setTimeout(confirm, 5000);
    // setTimeout(print, 3000);
    // window.open("https://google.com");
    // let promtName = prompt('Whats your name?');
    // console.log(promtName);

    // for (let i = 0; i < 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 1000 * i);
    // }

    // for (let i = i; i < 10; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 1000 * i);
    // }

    // for (let i = 5; i < 7; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 1000 * i);
    // }


    (function () {
        document.getElementById('temperature').addEventListener('input', function () {
            const celsius = parseFloat(this.value);
            if (!isNaN(celsius)) {
                const fahrenheit = Math.round(celsius * (9 / 5) + 32);
                document.getElementById('name').value = fahrenheit;
            } else {
                document.getElementById('name').value = '';
            }
        });

        document.getElementById('name').addEventListener('input', function () {
            const fahrenheit = parseFloat(this.value);
            if (!isNaN(fahrenheit)) {
                const celsius = Math.round((fahrenheit - 32) * (5 / 9));
                document.getElementById('temperature').value = celsius;
            } else {
                document.getElementById('temperature').value = '';
            }
        });
    }());

    // const celsius = 25;
    // const fahrenheit = celsius * (9 / 5) + 32;

    const personFunctions = {
        print() {
            console.log(`I am ${this.first} ${this.last}`);
        },
        talk() {
            console.log(`${this.first} ${this.last} Let's talk!`);
        }
    };

    function createPerson(first, last) {
        const person = {
            first,
            last
        };
        Object.assign(person, personFunctions);
        return person;
    }

    const p1 = createPerson('Liam', 'Carter');
    const p2 = createPerson('Ava', 'Thompson');

    console.log(p1, p2);

    function person3(first, last) {
        const person = Object.create(personFunctions);
        person.first = first;
        person.last = last;
        return person;
    }

    const p5 = person3('Noah', 'Ramirez');
    p5.talk();
    p5.print();
    console.log(p5);


    

}());


