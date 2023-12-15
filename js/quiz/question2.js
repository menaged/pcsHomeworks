window.app = window.app || {};
window.app.count = window.app.count || {};

(function () {
    'use strict';

    let counter = 0;
    let getCount = counter++;

    app.count = () => console.log(counter++ + ' let getCount = counter++;');

}());

app.count();
app.count();
app.count();
