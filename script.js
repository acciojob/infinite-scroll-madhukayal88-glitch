const list = document.getElementById("list");

let count = 1;

// add initial 10 items
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerText = "Item " + count++;
  list.appendChild(li);
}

// infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    for (let i = 0; i < 2; i++) {
      const li = document.createElement("li");
      li.innerText = "Item " + count++;
      list.appendChild(li);
    }
  }
});
