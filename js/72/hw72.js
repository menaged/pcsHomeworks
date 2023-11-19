(function () {
    'use strict';

    document.querySelector('#button').addEventListener('click', repeat);


    const myNewButton = document.createElement('button');

    button1.addEventListener('click', () => {
        const myNewButton = document.createElement('button');
        
        myNewButton.innerText = 'new button';
        document.body.appendChild(myNewButton);
        console.log('Click me! was clicked');
    });
    myNewButton();
}());