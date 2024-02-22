/* globals $*/
(function () {
    'use strict';

    $('#even').click(() => {
        $('p:nth-child(even)').css('color', 'yellow');
        $('p:nth-child(odd)').css('color', 'black');

    });
    $('#odd').click(() => {
        $('p:nth-child(odd)').css('color', 'yellow');
        $('p:nth-child(even)').css('color', 'black');
    });







}());