

//     let dragging;
//     let offset;
//     let zindex = 1;

//     document.addEventListener('mousedown', e => {
//         if (e.target.matches('.part')) {
//             dragging = e.target;

//             console.log(dragging.style);

//             offset = { y: e.offsetY, x: e.offsetX };

//             if (!dragging.matches('.potatoBody')) {
//                 dragging.style.zIndex = zindex++;
//             }
//         }
//     });

//     document.addEventListener('mousemove', e => {
//         e.preventDefault();

//         if (dragging) {
//             dragging.style.top = `${e.pageY - offset.y}px`;
//             dragging.style.left = `${e.pageX - offset.x}px`;

//         }
//     });

//     document.addEventListener('mouseup', e => {
//         if (dragging) {
//             dragging = false;
//             saveState();
//         }
//     });

//     // document.addEventListener('mouseup', e => {
//     //     if (dragging) {
//     //         dragging = null;
//     //         saveState();
//     //     }
//     // });

// }

// loadParts();
// loadState();

let dragging = null;
let offset = { x: 0, y: 0 };
let zindex = 1;

document.addEventListener('mousedown', e => {
    if (e.target.classList.contains('part')) {
        dragging = e.target;
        offset = { x: e.offsetX, y: e.offsetY };
        dragging.style.zIndex = zindex++;
    }
});

document.addEventListener('mousemove', e => {
    if (dragging) {
        dragging.style.left = `${e.pageX - offset.x}px`;
        dragging.style.top = `${e.pageY - offset.y}px`;
    }
});

document.addEventListener('mouseup', () => {
    if (dragging) {
        dragging = null;
        saveState();
    }
});

loadParts();
loadState();

import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or count updated:', count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        console.log('Button clicked, count incremented:', count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
