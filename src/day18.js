const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}