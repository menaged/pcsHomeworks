(function () {
  'use strict';

  let interval;
  const theButton = document.querySelector('#start');

  theButton.addEventListener('click', () => {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });

  function startColors() {
    theButton.innerText = 'stop';
    interval = setInterval(() => {

      const color = getRandomColor();
      setColors(document.body, color);

    }, 1000);
  }

  function stopColors() {
    theButton.innerText = 'start';
    clearInterval(interval);
    interval = null;
  }

  function getColorPart() {
    return Math.floor(Math.random() * 256);
  }

  function getRandomColor() {
    const r = getColorPart();
    const g = getColorPart();
    const b = getColorPart();
    return `rgb(${r}, ${g}, ${b})`;
  }

  function setColors(elem, color) {
    elem.style.color = color;
  }
}());
