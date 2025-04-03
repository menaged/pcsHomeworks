// (function () {
//     'use strict';


//     function start() {


//         console.log('contentScript.js started');

//         let loggedTimestamps = [new Date()];

//         const outputList = document.getElementsById('output-stream-list');

//         const statusElement = document.getElementById('status');

//         const log = () => {
//             const visibilityState = document.visibilityState;
//             const isTabActive = visibilityState === 'visible';
//             if (!isTabActive) {
//                 return;

//             }
//             const now = new Date();

//             const threshold = 1400;

//             const lastDiff = now - loggedTimestamps[loggedTimestamps.length - 1];

//             if (lastDiff > threshold) {
//                 const listItem = document.createElement('li');
//                 listItem.appendChild(document.createTextNode('Tab not visible for ${lastDiff / 1000} seconds'));
//                 outputList.prepend(listItem);

//                 loggedTimestamps.push(now);

//                 let success = true;
//                 for (let i = 1; i < loggedTimestamps.length; i++) {
//                     const diff = loggedTimestamps[i] - loggedTimestamps[i - 1];

//                     if (diff > threshold) {
//                         success = false;
//                         break;

//                     }
//                 }
//             }
//         };

//     }

// }());

// const carpool1 = ['Doe', 'Sample', 'Smith'];
const carpool2 = ['Brown', 'Jones'];
const carpool3 = ['Alfiih', 'Shlomo', 'Yosef B.'];

// console.log(carpool1);
console.log(carpool2);
console.log(carpool3);


// function quewe = 

const potus = {
    first: 'Joe',
    print1: function () {
        console.log(`first: ${this.first}`);
    },
    live: function () {
        console.log(this);

        const that = this;
        setInterval(function () {
            console.log('in interval', this);
            //this.age++;
            //this.print1();
            that.age++;
            that.print1();
        }, 3000);
    }
};

potus.print1();
potus.live();

(function () {
    'use strict';

    const clock = document.createElement('div');
    document.body.appendChild(clock);

    setInterval(() => {
        clock.innerText = new Date().toLocaleTimeString();
    }, 1000);


}());