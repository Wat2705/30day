const data = [
    {
        name: "Product a",
        price: 1000
    },
    {
        name: "asd b",
        price: 2000
    },
    {
        name: "dasdad c",
        price: 3000
    },
    {
        name: "qwe d",
        price: 3000
    },
    {
        name: "aa e",
        price: 4000
    },
    {
        name: "dd f",
        price: 6000
    }
]

let timeout;

const addChild = (data) => {
    data.map((e) => {
        let card = document.createElement('div');
        card.classList.add("mt-3");
        card.classList.add("flex");
        card.innerHTML = `
        <img style="width: 150px;" src="./image/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg" alt="">
        <div class="ml-10">
            <p>${e.name}</p>
            <p>${e.price}VND</p>
        </div>
        `;
        document.querySelector("#list").appendChild(card);
    })
}

addChild(data);

const search = (a) => {
    if (timeout != undefined){
        clearTimeout(timeout);
    };
    timeout = setTimeout(() => {
        a.value = a.value.trim();
        document.querySelector("#list").innerHTML = '';
        const regex = new RegExp(`${a.value}`, 'i');
    
        let result = data.filter((e) => {
            if (Number.isNaN(a.value * 1)){
                return regex.test(e.name);
            } else {
                return regex.test(e.price);
            }
        });
        
        addChild(result);

    }, 1000)
}