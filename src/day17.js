let fb = document.querySelector("#fb");
let yt = document.querySelector("#yt");
let tt = document.querySelector("#tt");

const count = (e, end) => {
    let count = 0;
    let counting = setInterval(() => {
        count += end / 100;
        if (count > end){
            clearInterval(counting);
            e.innerText = end
        } else e.innerText = count;
    }, 1)
}

count(fb, 12000);
count(yt, 3000);
count(tt, 58000);