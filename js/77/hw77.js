/* global $*/
(function () {
    'use strict';

    const tform = $('#inputTesting');
    tform.submit(e => {
        console.log('submitted');
        e.preventDefault();
    });







}());