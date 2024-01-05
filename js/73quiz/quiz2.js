(function () {
    'use strict';

    function ourMap(anArray, callback) {
        const results = [];
        anArray.forEach(elem => {
            results.push(callback(elem));

        });
        return results;
    }

    const numbers = [2, 4, 6];
    console.log(ourMap(numbers, function (n) {
        return n * 2;
    }));

}());




const newArray = [10, 20, 30];
function newMap(numeros, devolvimento) {
    'use strict';
    const results = [];
    newArray.forEach(elem => {
        results.push(devolvimento(elem));
    });
    return results;
}

const anotherArray = [45, 54, 65, 2];
console.log(newMap(anotherArray, function (n){
    'use strict';
    return n * 2;
}));

// eslint-disable-next-line strict
console.log(newMap(anotherArray, n => n * n));
















