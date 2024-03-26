let scrollElement = document.querySelectorAll('#scrolling');

function scrollEvent(el) {
    window.addEventListener("scroll", () => {
        let rect = el.getClientRects();

        if (!(rect[0].bottom < 0 || rect[0].top > window.innerHeight)) {
            el.classList.add('start');
        } else {
            el.classList.remove('start');
        }
    })
}


function eventOnElement(el) {
    for (let e of el) {
        scrollEvent(e);
    }
}

eventOnElement(scrollElement);