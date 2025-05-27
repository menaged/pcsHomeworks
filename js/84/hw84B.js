
const squareMove = document.querySelector('#square');

let offsetX;
let offsetY;

squareMove.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - squareMove.offsetLeft;
    offsetY = e.clientY - squareMove.offsetTop;
    document.addEventListener('mousemove', move);
    
});

const move = (e) => {    
    squareMove.style.left = `${e.clientX - offsetX}px`;
    squareMove.style.top = `${e.clientY - offsetY}px`;

};

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
});

