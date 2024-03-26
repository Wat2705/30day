const search = document.querySelector("#search");
const searchBox = document.querySelector("#searchbox");

search.addEventListener("click", () => {
  if (searchBox.style.display == "none") {
    search.style.animation = "moveIcon 2s";
    search.style.animationFillMode = "forwards";
    setTimeout(() => {
      search.classList.remove("rounded-lg");
      search.classList.add("rounded-r-lg");
      searchBox.style.display = "block";
      searchBox.style.animation = "moveBtn 2s";
      searchBox.style.animationFillMode = "forwards";
    }, 1500);
  } else {
    searchBox.style.animation = "closeBtn 2s";
    searchBox.style.animationFillMode = "forwards";
    setTimeout(() => {
        searchBox.style.display = "none";
        search.style.animation = "closeIcon 2s";
        search.style.animationFillMode = "forwards";
        search.classList.add("rounded-lg");
        search.classList.remove("rounded-r-lg");
    }, 1500)

  }
});
