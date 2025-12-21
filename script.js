const list = document.getElementById("infi-list");

let count = 1;

// add 2 items by default
for (let i = 0; i < 2; i++) {
  const li = document.createElement("li");
  li.innerText = "Todo " + count++;
  list.appendChild(li);
}

// infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    for (let i = 0; i < 2; i++) {
      const li = document.createElement("li");
      li.innerText = "Todo " + count++;
      list.appendChild(li);
    }
  }
});
