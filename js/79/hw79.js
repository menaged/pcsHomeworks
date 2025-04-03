/*global $*/

(function () {
    'use strict';

    const input = $('#input'); //Selects an element with the ID input using jQuery and assigns it to the constant input. 
    //This represents an input field in the HTML.
    const resultResponse = $("#results")
    const spinner = $('#spinner')

    $('#inputButton').click(async () => { //Selects an element with the ID inputButton using jQuery and attaches a 
        //click event listener. When the button is clicked, the arrow function inside will be executed asynchronously.
        spinner.show();
        try {
            const response = await fetch(input.val()); //Uses the Fetch API to make an asynchronous HTTP request to the 
            //URL specified in the input field (input.val()). It waits for the response to come back before proceeding.
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const text = await response.text(); //Extracts the response body as text. Also waits for this operation to complete before moving on.
            resultResponse.text(text);// Finally, the text content of the response is logged to the console.
            //spinner.hide();
        } catch (e) {
            pcs.messageBox(e.message);
            //spinner.hide();
        } finally {
            spinner.hide();
        }
    });

    const hoo = 'balames'

}());