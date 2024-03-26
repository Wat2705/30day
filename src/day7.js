const tags = ["reactjs", "nodejs"];

const render = () => {
  document.querySelector("#content").innerHTML = `
    ${tags
      .map((e) => {
        return `
            <button id='del'>${e}</button>
        `;
      })
      .join("")}
`;

  for (let e of document.querySelectorAll("#del")) {
    e.addEventListener("click", () => {
      tags.splice(tags.indexOf(e.innerHTML), 1);
      render();
    });
  }
};

render();

document.querySelector("#add").addEventListener("submit", (e) => {
  e.preventDefault();
  tags.push(document.querySelector("#add-content").value);
  render();
});
