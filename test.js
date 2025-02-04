const canvas = document.getElementById("canvas");
const decode = document.getElementById("decode");
const context = canvas.getContext("2d");
let img = document.querySelector("#file");
let inputMess = document.querySelector("#message");
let basecode = "";

let posArr = [];
img.addEventListener("input", (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);

    const image = new Image();
    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        // Ẩn thông điệp "hello" trong ảnh
        const message = inputMess.value || "hello";
        for (let i = 0; i < message.length; i++) {
            const charCode = message.charCodeAt(i);
            const x = Math.floor(i + 1);
            let y = Math.floor(canvas.height - 1);
            posArr.push({ x, y });
            // Thay đổi giá trị pixel
            context.fillStyle = `rgb(${charCode}, ${charCode}, ${charCode})`;
            context.fillRect(x, y, 1, 1);
        }

        // Chuyển đổi ảnh sang Base64
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const base64Image = canvas.toDataURL();
        basecode = base64Image;
        document.querySelector("img").src = basecode;
        console.log(posArr);

        localStorage.setItem("basecode", basecode);
        localStorage.setItem("posArr", JSON.stringify(posArr));
    };

    image.src = url;
});

///dich nguoc
document.querySelector("button").addEventListener("click", () => {
    let basecode = localStorage.getItem("basecode");
    let posArr = localStorage.getItem("posArr");
    posArr = JSON.parse(posArr);

    function getMessageFromImg(base64String, posArr) {
        const img = new Image();
        img.src = base64String;
        const canvas = document.createElement("canvas");
        let context;

        return new Promise((resolve, reject) => {
            let message = "";
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                context = canvas.getContext("2d", { willReadFrequently: true });
                context.drawImage(img, 0, 0);
                message = posArr.reduce((total, item) => {
                    const imageData = context.getImageData(item.x, item.y, 1, 1);
                    const data = imageData.data;

                    const charCode = data[0];
                    let character = String.fromCharCode(charCode);

                    return total + character;
                }, "");

                resolve(message);
            };
        });
    }

    getMessageFromImg(basecode, posArr).then((data) => {
        console.log(data);
    });
});