const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const sizeInner = document.querySelector('#size');
const save = document.querySelector('#save')

let currentPos = {
    x: 0,
    y: 0
}

let color = '#000000';
let drawing = false;

let size = 5;
sizeInner.innerHTML = size

canvas.addEventListener('mousedown', (e) => {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    drawing = true;
})

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size * 2;
        ctx.stroke();

        currentPos = {
            x: e.offsetX,
            y: e.offsetY
        }
    }
})

document.addEventListener('mouseup', () => {
    drawing = false;
})

document.querySelector('#color').addEventListener('change', (e) => {
    color = e.currentTarget.value;
})

document.querySelector('#eraser').addEventListener('click', () => {
    color = '#ffffff';
})

document.querySelector('#decrease').addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
        sizeInner.innerHTML = size;
    }
})

document.querySelector('#increase').addEventListener('click', () => {
    if (size < 30) {
        size += 5;
        sizeInner.innerHTML = size;
    }
})

document.querySelector('#clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, 1000, 500);
})

save.addEventListener('click', (e) => {
    save.setAttribute('download', 'image.png');
    save.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    save.click();
})