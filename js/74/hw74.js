(function () {
    'use strict';

    let index = 0;
    const colors = ['red', 'green', 'purple'];

    document.querySelector('#button').addEventListener('click', () => {
        document.body.style.color = colors[index++];
    });


    let index2 = 0;
    const circle = ['yellow', 'red', 'orange', 'blue'];
    document.querySelector('#circleButton').addEventListener('click', () => {
        document.querySelector('#circle').style.backgroundColor = circle[index2++];
    } );
    


}());
