(function () {;
    'use strict'

    const button2 = document.querySelector('#button');
    button2.addEventListener(click, () => {
        const newbutton2 = document.createElement('button2');
        newbutton2.innerText('New Button3');
        document.body.appendChild(new button3);
        console.log('Button was cliked js2')

    });
}());