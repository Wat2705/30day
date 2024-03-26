let txt = 'Nodemy - 30 ngày thực chiến';
let index = 0;
let txtArr = txt.split('');

function display() {
    let displaying = setInterval(() => {
        document.querySelector('#contain').innerHTML += txtArr[index];
        if (index == txtArr.length - 1) {
            clearInterval(displaying);
            setTimeout(() => {
                hide();
            }, 2000)
        } else index++;
    }, 100)
}


function hide() {
    let hiding = setInterval(() => {
        document.querySelector('#contain').innerHTML = txt.slice(0, index);
        if (index == 0) {
            clearInterval(hiding);
            display();
        } else index--;
    }, 50)
}

display();