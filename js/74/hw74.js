(function () {
    'use strict';

    let index = 0;
    const colors = ['red', 'green', 'purple', 'yellow', 'white'];

    document.querySelector('#startButton').addEventListener('click', () => {
        setInterval(() => {
            document.body.style.color = colors[index++];
            if (index === colors.length) {
                index = 0;
            }
            document.body.querySelector('p').style.backgroundColor = colors[index];
        }, 1000);
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
