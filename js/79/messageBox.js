window.pcs = window.pcs || {};
window.pcs.messageBox = (function () {
    'use strict';

    const width = 274;
    const height = 162;
    let topOffset = -(height / 2);
    let leftOffset = -(width / 2);

    let nextZindex = 1;

    const modalBackground = document.createElement('div');
    modalBackground.style.position = 'absolute';
    modalBackground.style.width = '100%';
    modalBackground.style.height = '100%';
    modalBackground.style.top = '0';
    modalBackground.style.left = '0';
    modalBackground.style.backgroundColor = 'lightgrey';
    //modalBackground.style.zIndex = '1';
    modalBackground.style.opacity = '0.5';
    modalBackground.style.display = 'none';
    document.body.appendChild(modalBackground);

    return function (msg, callback, buttons /*= ['ok']*/, modal = false) {
        buttons = buttons || ['ok'];

        const div = document.createElement('div');
        const msgDiv = document.createElement('div');
        msgDiv.innerText = msg;
        msgDiv.style.overflow = 'auto';
        msgDiv.style.height = '7em';

        div.style.border = '1px solid black';
        div.style.backgroundColor = 'lightblue';
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;
        div.style.boxSizing = 'border-box';
        div.style.padding = '1em';
        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${topOffset}px`;
        div.style.marginLeft = `${leftOffset}px`;
        div.style.textAlign = 'center';
        div.className = 'messageBox';

        const buttonDiv = document.createElement('div');
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '0.5em';
        buttonDiv.style.width = '100%';
        buttonDiv.style.left = 0;

        for (let/*var*/ i = 0; i < buttons.length; i++) {
            const button = document.createElement('button');
            button.innerText = buttons[i];

            button.addEventListener('click', () => {
                div.remove();
                if (callback) {
                    callback(i);
                }

                modalBackground.style.display = 'none';
            });
            buttonDiv.appendChild(button);
        }

        div.appendChild(msgDiv);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);

        topOffset += 20;
        leftOffset += 20;

        const style = getComputedStyle(div);
        if (height + topOffset + parseFloat(style.top) > window.innerHeight) {
            topOffset -= (window.innerHeight - height);
        }
        if (width + leftOffset + parseFloat(style.left) > window.innerWidth) {
            leftOffset -= (window.innerWidth - width);
        }
        if (modal) {
            modalBackground.style.display = 'block';

            modalBackground.style.zIndex = nextZindex++;
            div.style.zIndex = nextZindex;
        }
        div.addEventListener('click', () => {
            div.style.zIndex = nextZindex++;
        });
    };
}());
