document.querySelector("#trigger").addEventListener("click", (e) => {
    e.stopPropagation();
    if (document.querySelector("#container").getAttribute("style") == "filter: brightness(50%)") {
        document.querySelector("#container").setAttribute("style", "filter: brightness(100%)");
        document.querySelector("#modal-container").style.display = "none";
    } else {
        document.querySelector("#container").setAttribute("style", "filter: brightness(50%)");
        document.querySelector("#modal-container").style.display = "inline-block";
    }
});

document.querySelector("#container").addEventListener("click", () => {
    document.querySelector("#container").setAttribute("style", "filter: brightness(100%)");
    document.querySelector("#modal-container").style.display = "none";
});

document.querySelector("#close").addEventListener("click", () => {
    document.querySelector("#container").setAttribute("style", "filter: brightness(100%)");
    document.querySelector("#modal-container").style.display = "none";
});