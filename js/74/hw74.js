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
    });

    let squareIndex = 0;
    const square = ['yellow', 'red', 'orange', 'blue'];

    document.querySelector('#squareButton').addEventListener('click', () => {
        document.querySelector('#square').style.backgroundColor = square[squareIndex++];
    });
    
    let triangleIndex = 0;
    const triangle = ['yellow', 'red', 'orange', 'blue'];

    document.querySelector('#triangleButton').addEventListener('click', () => {
        document.querySelector('#triangle').style.backgroundColor = triangle[triangleIndex++];
    });

}());
