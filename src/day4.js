for (let e of document.querySelectorAll("#image")){
    e.addEventListener("click", () => {
        document.querySelector("#clicked-image").src = e.src;
        document.querySelector("#clicked-image").dataset.id = e.dataset.id;
        document.querySelector("#clicked").style.display = 'flex';
    })
}

document.querySelector("#exit").addEventListener("click", () => {
    document.querySelector("#clicked").style.display = 'none';
});

document.querySelector("#next").addEventListener("click", () => {
    let id = document.querySelector("#clicked-image").dataset.id;
    if (id == 6){
        document.querySelector("#clicked-image").src = document.querySelector("[data-id='1']").src;
        document.querySelector("#clicked-image").dataset.id = 1;
    } else {
        document.querySelector("#clicked-image").src = document.querySelector(`[data-id='${id * 1 + 1}']`).src;
        document.querySelector("#clicked-image").dataset.id = `${id * 1 + 1}`;   
    }
});

document.querySelector("#back").addEventListener("click", () => {
    let id = document.querySelector("#clicked-image").dataset.id;
    if (id == 1){
        document.querySelector("#clicked-image").src = document.querySelector("[data-id='6']").src;
        document.querySelector("#clicked-image").dataset.id = 6;
    } else {
        document.querySelector("#clicked-image").src = document.querySelector(`[data-id='${id * 1 - 1}']`).src;
        document.querySelector("#clicked-image").dataset.id = `${id * 1 - 1}`;   
    }
});