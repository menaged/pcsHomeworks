window.pcs = (function () {
  'use strict';

  function setCss(elem, property, value) {
    elem.style[property] = value;
  }

  function getCss(elem, property) {
    //return elem.style[property];
    return getComputedStyle(elem)[property];
  }

  function on(elem, type, callback) {
    elem.addEventListener(type, callback);
  }
  
  function setColors(elem) {
    setInterval(() => {

      const color = getRandomColor();
      elem.style.color = color;
    }, 1000);
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

  return function (selector) {
    const elem = document.querySelector(selector);

    return {
      css: function (property, value) {
        if (arguments.length === 2) {
          setCss(elem, property, value);
          return this;
        } else {
          return getCss(elem, property);
        }
      },
      color: function () {  
        setColors(elem);  },

      on: function (type, callback) {
        on(elem, type, callback);
        return this;
      },
      hide: function () {
        setCss(elem, 'display', 'none');
        return this;
      },
      show: function () {
        setCss(elem, 'display', 'block');
        return this;
      },
      click: function (callback) {
        on(elem, 'click', callback);
        return this;
      }
    };
  };
}());
