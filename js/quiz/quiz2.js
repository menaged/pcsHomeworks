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

    console.log(ourMap(numbers, n => n * n));

    function fooify(n){
        return `foo${n}`;
    }
    console.log(ourMap(numbers, fooify));

    console.log(numbers.map(fooify));
}());