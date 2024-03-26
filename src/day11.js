const container = document.querySelector("#alert-container");

const successBtn = () => {
  let card = document.createElement("div");
  card.innerHTML = `
        <h2>Alert Success</h2>
      `;
  card.classList.add("relative");
  card.style.cssText =
    "border: 1px solid black; width: 300px; height: 100px; animation: move 2s ease-in; transition: ease-in; animation-fill-mode: forwards;";
  container.appendChild(card);
  setTimeout(() => {
    card.remove();
  }, 2500);
};

const warnBtn = () => {
  let card = document.createElement("div");
  card.innerHTML = `
          <h2>Alert Warning</h2>
        `;
  card.classList.add("relative");
  card.style.cssText =
    "border: 1px solid black; width: 300px; height: 100px; animation: move 2s ease-in; transition: ease-in; animation-fill-mode: forwards;";
  container.appendChild(card);
  setTimeout(() => {
    card.remove();
  }, 2500);
};

const errBtn = () => {
  let card = document.createElement("div");
  card.innerHTML = `
          <h2>Alert Error</h2>
        `;
  card.classList.add("relative");
  card.style.cssText =
    "border: 1px solid black; width: 300px; height: 100px; animation: move 2s ease-in; transition: ease-in; animation-fill-mode: forwards;";
  container.appendChild(card);
  setTimeout(() => {
    card.remove();
  }, 2500);
};
