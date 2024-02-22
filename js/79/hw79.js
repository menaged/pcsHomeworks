/*global $*/

(function () {
    'use strict';

    const input = $('#input');
    const resultResponse = $("#results")
    const spinner = $('#spinner')

    $('#inputButton').click(async () => {
        spinner.show();
        try {
            const response = await fetch(input.val());
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const text = await response.text();
            resultResponse.text(text);
            //spinner.hide();
        } catch (e) {
            pcs.messageBox(e.message);
            //spinner.hide();
        } finally {
            spinner.hide();
        }
    });


}());