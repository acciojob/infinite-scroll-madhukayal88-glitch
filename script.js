const list = document.getElementById("infi-list");

// 1. Add 10 items by default
let itemCount = 10;
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial population
addItems(10);

// 2. Infinite Scroll Logic
list.addEventListener("scroll", () => {
  // Check if the user has scrolled to the bottom
  // We use a 5px buffer to ensure it triggers reliably across different browsers
  const totalHeight = list.scrollHeight;
  const visibleHeight = list.clientHeight;
  const scrollPosition = list.scrollTop;

  if (scrollPosition + visibleHeight >= totalHeight - 5) {
    addItems(2);
  }
});