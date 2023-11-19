(function () {
    'use strict';
    
    function newButton() {
        const myNewButton = document.createElement('button');
        // myNewButton.innerText = `${++buttonNumber}`;
        document.body.appendChild(myNewButton);

    }
    document.querySelector('#startButton').addEventListener('click', newButton);



})();
