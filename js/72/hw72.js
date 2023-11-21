(function () {
    'use strict';

    function clickHandler() {
        console.log(this);
        const myNewButton = document.createElement('button');
        myNewButton.innerText = `${++newButton}`;
        myNewButton.addEventListener('click', clickHandler);
        document.body.appendChild(myNewButton);
    }
    let newButton = 1;
    const button1 = document.querySelector('#button');

    button1.addEventListener('click', clickHandler);
}());

