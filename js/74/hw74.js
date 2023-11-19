(function () {
    'use strict';

    let index = 0;
    const colors = ['red', 'green', 'purple']

    document.querySelector('#button').addEventListener('click', () => {
        document.body.style.color = colors[index++];

    })
})
