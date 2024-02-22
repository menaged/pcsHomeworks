(function () {
    'use strict';

    const num2011 = 3000;
    console.log(num2011);
    console.log('2011 second time');
    let laterYear = 7;
    laterYear *= 4;
    console.log(laterYear);
    console.log('hello'.length);
    console.log(['A', 'B', 'C'][0]);


    let hungerLevel = 5;
    if (hungerLevel < 6) {
        console.log('Time to eat!');
    } else {
        console.log('We can eat later!');
    }

    let raceNumber = Math.floor(Math.random() * 1000);
    let earlyRegistration = true;
    let runnerAge = 17;

    runnerAge && earlyRegistration;

    if (runnerAge && earlyRegistration) {
        raceNumber += 1000;
    }
    if (runnerAge > 18) {
        console.log(`You will race at 9:30am ${raceNumber}.`);
    } else if (runnerAge && earlyRegistration) {
        console.log(`Late adults run at 11:00 am ${raceNumber}`);
    } else if (runnerAge < 18) {
        console.log(`Youth registrants run at 12:30 pm (regardless of registration) ${raceNumber}`);
    } else {
        console.log(`Please check the registration desk ${raceNumber}`);
    }

    const plantNeedsWater = function (day) {
        if (day === 'Wednesday') {
            return true;
        } else {
            return false;
        }
    };

    plantNeedsWater('Tuesday');
    console.log(plantNeedsWater('Tuesday'));

    function greeting(name = 'stranger') {
        console.log(`Hello, ${name}!`);
    }

    greeting('Nick');
    greeting();


    console.log('------ ROCK PAPER SCISSORS ------');

    const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
            return userInput;
        } else {
            console.log('error message');
        }
    };
    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    };
    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'This game is a tie!';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'Computer won :( ';
            } else {
                return 'You won!!! :) ';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'Computer won :( ';
            } else {
                return 'You won!!! :) ';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'Computer won :( ';
            } else {
                return 'You won!!! :) ';
            }
        }
        if (userChoice === 'bomb') {
            return 'You woooooon';
        }
    };
    const playGame = () => {
        const userChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice();
        console.log(userChoice, computerChoice);
        console.log(determineWinner((userChoice), (computerChoice)));
    };
    playGame();


    console.log('------ SLEEP DEEP CALCULATOR ------');

    const getSleepHours = day => {
        let hours;
        switch (day) {
            case 'monday':
                hours = 8;
                break;
            case 'tuesday':
                hours = 7;
                break;
            case 'wednesday':
                hours = 7;
                break;
            case 'thursday':
                hours = 6;
                break;
            case 'friday':
                hours = 4;
                break;
            case 'sat':
                hours = 5;
                break;
            case 'sunday':
                hours = 9;
                break;
            default:
                hours = 'error';

        }
        return hours;
    };

    const getActualSleepHours = () =>
        getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('sat') + getSleepHours('sunday');

    console.log(getActualSleepHours());

    const getIdealSleepHours = () => {
        const idealHours = 8;
        return idealHours * 7;
    };
    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();

        if (actualSleepHours === idealSleepHours) {
            console.log('You got perfect amount of sleep.');
        } else if (actualSleepHours > idealSleepHours) {
            console.log('You got more sleep than needed.' + (actualSleepHours - idealSleepHours) + ' Less hours for You!');
        } else if (actualSleepHours < idealSleepHours) {
            console.log('You should get some rest. ' + (idealSleepHours - actualSleepHours) + ' More hours for You!');
        } else {
            console.log('ERROR');
        }
    };

    calculateSleepDebt();


    console.log('----- SECRET MESSAGE ------');

    let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
    console.log(secretMessage.length);
    secretMessage.pop();
    console.log(secretMessage.length);
    secretMessage.push('to', 'Program');
    secretMessage.splice(7, 1, 'right');
    secretMessage.shift();
    secretMessage.unshift('Programming');
    console.log(secretMessage);
    secretMessage.splice(6, 5, 'know');
    console.log(secretMessage);
    console.log(secretMessage.join());

    console.log('------ LOOP ------');

    const bobsFollowers = ['jojo', 'rere', 'zezinho', 'more', 'less'];
    const tinasFollowers = ['rere', 'jojo', 'fulinho', 'more', 'kayle'];
    const mutualFollowers = [];

    for (let i = 0; i < bobsFollowers.length; i++) {
        for (let j = 0; j < tinasFollowers.length; j++) {
            if (bobsFollowers[i] === tinasFollowers[j]) {
                mutualFollowers.push(bobsFollowers[i]);
            }
        }
    }
    console.log(mutualFollowers);


    for (let counterOne = 1; counterOne < 4; counterOne++) {
        console.log(counterOne);
    }
    let counterTwo = 1;
    while (counterTwo < 4) {
        console.log(counterTwo + ' while loop');
        counterTwo++;
    }

    // This is while do loop
    let countString = '';
    let i = 0;

    do {
        countString = countString + i;
        i++;
    } while (i < 5);

    console.log(countString);


    console.log('------ WHALE TALK ------');
    const input = 'Heloo! you and me aa';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const resultArray = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'e') {
            resultArray.push(input[i]);
        }
        if (input[i] === 'u') {
            resultArray.push(input[i]);
        }

        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(input[i]);
            }

        }
    }

    const resultString = resultArray.join('').toUpperCase();
    console.log(resultString);


    console.log('--------------------TESTING------------------');

    const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

    const foundAnimal = animals.findIndex(any => {
        return any === 'elephant';
    });

    const startsWithS = animals.findIndex(ss => {
        return ss[0] === 's' ? true : false;
    });

    console.log(foundAnimal);
    console.log(startsWithS);

    console.log('------ 2 PARAMETERS ------');
    const newNumbers = [1, 3, 5, 7];

    const newSum = newNumbers.reduce((accumulator, currentValue) => {
        console.log('The value of accumulator: ' + accumulator);
        console.log('The value of currentValue: ' + currentValue);
        return accumulator + currentValue;
    }, 10);

    console.log(newSum);


    console.log('------ GRAMMAR CHECKER ------');

    let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a glorious 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

    let storyWords = story.split(' ');
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';

    let count = 0;
    // eslint-disable-next-line no-unused-vars
    storyWords.forEach(word => {
        count++;
    });
    storyWords = storyWords.filter(word => {
        return word !== unnecessaryWord;
    });
    storyWords = storyWords.map(word => {
        if (word === misspelledWord) {
            return 'beautiful';
        } else {
            return word;
        }
    });
    let badWordIndex = storyWords.findIndex(word => {
        if (word === badWord) {
            return storyWords[78] = 'really';
        }
    });
    let lengthCheck = storyWords.every(word => {
        word <= 10;
    });

    storyWords.forEach(word => {
        word.length > 10 && console.log(word);
    });


    console.log(lengthCheck); // check false
    console.log(badWordIndex + ' bad word index');
    console.log(count + ' total words');
    console.log(storyWords.join(' '));


    let spaceship = {
        homePlanet: 'Earth',
        color: 'silver',
        'Fuel Type': 'Turbo Fuel',
        numCrew: 5,
        flightPath: ['Venus', 'Mars', 'Saturn']
    };
    let crewCount = spaceship.numCrew;
    let planetArray = spaceship.flightPath;

    console.log(crewCount, planetArray);


    console.log('------ JUST AN EXAMPLE ------');

    const spaceship2 = {
        passengers: {
            number1: 'Joao Melao',
        },
        telescope: {
            yearBuilt: 2018,
            model: '91031-XLT',
            focalLength: 2032
        },
        crew: {
            captain: {
                name: 'Sandra',
                degree: 'Computer Engineering',
                encourageTeam() { console.log('We got this!'); }
            }
        },
        engine: {
            model: 'Nimbus2000'
        },
        nanoelectronics: {
            computer: {
                terabytes: 100,
                monitors: 'HD'
            },
            'back-up': {
                battery: 'Lithium',
                terabytes: 50
            }
        }
    };
    // This is how to add a new property and value to an object
    spaceship2.nanoelectronics.coisaNova = 'sera que vai funcionar';
    spaceship2['nanoelectronics']['coisaNova2'] = 'sera 2 que 2 ira funcionar2';

    console.log(spaceship2);
    console.log(spaceship2.passengers);

    let shipGo = {
        tire: ['rubber', 'turbina'],
        bancos: 'couro',
        cores: 'cinza'

    };
    let shipGoUpdate = isso => {
        isso.cores = 'preto';
    };

    console.log(shipGo.cores); // prints cinza
    shipGoUpdate(shipGo);
    console.log(shipGo.cores);  //prints preto

    //Same example but different
    let spaceship3 = {
        'Fuel Type': 'Turbo Fuel',
        homePlanet: 'Earth'
    };

    let greenEnergy = fuel => {
        fuel['Fuel Type'] = 'avocado oil';

    };
    let remotelyDisable = some => {
        some.disabled = true;
    };

    greenEnergy(spaceship3);
    remotelyDisable(spaceship3);
    console.log(spaceship3);

    //Different example

    console.log('krossinger');
    let tutor = {
        firstName: 'Daniel',
        lastName: 'Krossinger',
        age: 35,
        details: function () {
            console.log(`this person name is: ${this.firstName} ${this.lastName} ${this.age} `);
        }
    };
    tutor.details();

    console.log('---------------------');

    let spaceship4 = {
        crew: {
            captain: {
                name: 'Lily',
                degree: 'Computer Engineering',
                cheerTeam() { console.log('You got this!'); }
            },
            'chief officer': {
                name: 'Dan',
                degree: 'Aerospace Engineering',
                agree() { console.log('I agree, captain!'); }
            },
            medic: {
                name: 'Clementine',
                degree: 'Physics',
                announce() { console.log('Jets on!'); }
            },
            translator: {
                name: 'Shauna',
                degree: 'Conservation Science',
                powerFuel() { console.log('The tank is full!'); }
            }
        }
    };

    for (let crewMember in spaceship4.crew) {
        console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
    }

    for (let crewMember in spaceship.crew) {
        console.log(`${spaceship4.crew[crewMember].name}: ${spaceship4.crew[crewMember].degree}`);
    }


    console.log('------ GETTERS ------');

    const robot = {
        _model: '1E78V2',
        _energyLevel: 100,

        get energyLevel() {
            if (typeof this._energyLevel === 'number') {
                return `My current energy level is ${this._energyLevel}`;
            } else {
                return 'System malfunction: cannot retrieve energy level';
            }
        }
    };
    console.log(robot.energyLevel);


    console.log('------ SETTERS ------');

    const robot2 = {
        _model: '1E78V2',
        _energyLevel: 100,
        _numOfSensors: 15,

        get numOfSensors() {
            if (typeof this._numOfSensors === 'number') {
                return this._numOfSensors;
            } else {
                return 'Sensors are currently down.';
            }
        },
        set numOfSensors(num) {
            if (typeof num === 'number' && num >= 0) {
                this._numOfSensors = num;
            } else {
                console.log('Pass in a number that is greater than or equal to 0');
            }
        }
    };
    robot.numOfSensors = 100;
    console.log(robot2.numOfSensors);


    console.log('----- PROJECT RESAURANT ------');

    const menu = {
        _meal: 'pizza',
        _price: 13,

        set meal(mealToCheck) {
            if (typeof mealToCheck === 'string') {
                this._meal = mealToCheck;
            }
        },
        set price(priceToCheck) {
            if (typeof priceToCheck === 'number') {
                this._price = priceToCheck;
            }
        },
        get todaysSpecial() {
            if (typeof this._meal === 'string' && typeof this._price === 'number') {
                return 'Today’s Special is Spaghetti for $5!';
            } else {
                return 'Meal or price was not set correctly!';
            }
        }
    };

    console.log(`is this working? ${menu._meal} houppefuly`);
    console.log(menu._price);

    // Another project

    const team = {
        _players: [
            {
                firstName: 'Tubya',
                lastName: 'Goshkosh',
                age: 25
            },
            {
                firstName: 'Geronimo',
                lastName: 'Fartalhama',
                age: 22
            },
            {
                firstName: 'Bobalhao',
                lastName: 'Robertao',
                age: 28
            }
        ],
        _games: [
            {
                opponent: 'Jets',
                teamPoints: 42,
                opponentPoints: 40
            },
            {
                opponent: 'Patetas',
                teamPoints: 47,
                opponentPoints: 44
            },
            {
                opponent: 'Coelhos',
                teamPoints: 50,
                opponentPoints: 33
            }
        ],
        get players() {
            return this._players;
        },
        get games() {
            return this._games;
        },
        addPlayer(newFirstName, newLastName, newAge) {
            let player = {
                firstName: newFirstName,
                lastName: newLastName,
                age: newAge
            };
            this.players.push(player);
        },
        addGame(newOpponent, newTeamPoints, newOpponentsPoints) {
            let game = {
                opponent: newOpponent,
                teamPoints: newTeamPoints,
                opponentPoints: newOpponentsPoints
            };
            this.games.push(game);
        }

    };

    team.addPlayer('Bugs', 'Bunny', 26);
    console.log(team.players);
    team.addGame('Titams', 100 , 98);
    console.log(team.games);



}());