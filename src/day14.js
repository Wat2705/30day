const images = [
    '360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg',
    "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.webp",
    "czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.webp",
    "hand-painted-watercolor-pastel-sky-background_23-2148902771.avif",
    "painting-mountain-lake-with-mountain-background_188544-9126.avif"
]

const bigImg = document.querySelector("#bigImg");

bigImg.src = `./image/${images[0]}`

document.querySelector("#slide").innerHTML = `
    ${images.map((e) => {
        return `
            <img id='item' src='./image/${e}'/>
        `
    }).join('')}
`

for (let el of document.querySelectorAll("#item")){
    if (el.src == bigImg.src){
        el.classList.add('selected');
    };
    el.addEventListener('click', (e) => {
        bigImg.src = e.target.src;
    })
}

document.querySelector("#container").addEventListener('click', () => {
    for (let el of document.querySelectorAll("#item")){
        if (el.src == bigImg.src){
            el.classList.add('selected');
        } else el.classList.remove('selected')
    };
})

const next = () => {
    let i = images.indexOf(bigImg.src.slice(32))
    if (i != images.length - 1){
        bigImg.src = `./image/${images[i + 1]}`;
    } else bigImg.src = `./image/${images[0]}`;
}

const back = () => {
    let i = images.indexOf(bigImg.src.slice(32))
    console.log(images[images.length - 1])
    if (i != 0){
        bigImg.src = `./image/${images[i - 1]}`;
    } else bigImg.src = `./image/${images[images.length - 1]}`;
}