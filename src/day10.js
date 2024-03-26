let data = [
  {
    id: 1,
    text: "asdasddas",
  },
  {
    id: 2,
    text: "gjenqkjfq",
  },
];

const change = (e) => {
  if (e.style.color != "gray") {
    e.style.color = "gray";
    e.style.textDecoration = "line-through";
  } else {
    e.style.color = "";
    e.style.textDecoration = "";
  }
};

const render = () => {
  document.querySelector("#table").innerHTML = `
    ${data
      .map((e) => {
        return `
            <tr>
                <td onclick='change(this)'>${e.text}</td>
                <td><button id="del" data-id="${e.id}">Del</button></td>
            </tr>
        `;
      })
      .join("")}
`;

  for (let e of document.querySelectorAll("#del")) {
    e.addEventListener("click", () => {
      for (let v of data) {
        if (v.id == e.dataset.id) {
          data.splice(data.indexOf(v), 1);
        }
      }
      render();
    });
  }
};

render();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  data.push({
    id: data.length + 1,
    text: document.querySelector("input").value,
  });

  render();
});
