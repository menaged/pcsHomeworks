(async function () {
    'use strict';

    try {
        const response = await fetch('hw80.json');
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);

        }
        const recipes = await response.json();
        console.log(recipes);
    } catch (e) {
        console.error(e.message);
    };



}());
