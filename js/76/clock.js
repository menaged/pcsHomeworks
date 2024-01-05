(function () {
    'use strict';

    const clock = document.createElement('div');
    document.body.appendChild(clock);

    setInterval(() => {
        clock.innerText = new Date().toLocaleTimeString();
    }, 1000);


}());