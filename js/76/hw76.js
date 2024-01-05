window.pcs = (function () {
    'use strict';

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        return getComputedStyle(elem)[property];
    }

    function on(elem, type, callback) {
        elem.addEventListener(type, callback);
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
            },
            flash: function (duration, speed) {
                const interval = setInterval(() => {
                    setCss(elem, 'color', getRandomColor());
                }, speed);
                setTimeout (() => {
                    clearInterval(interval);
                }, duration);
                return this;
            }
        };
    };
}());
