const list = document.getElementById("infi-list");

// Start counter from 0
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// 1. Initial Setup: Add 10 items
addItems(10);

// 2. Detect end of scroll
list.addEventListener("scroll", () => {
  const scrollPosition = Math.ceil(list.scrollTop + list.clientHeight);
  const totalHeight = list.scrollHeight;

  // 3. Add 2 more items automatically
  if (scrollPosition >= totalHeight) {
    addItems(2);
  }
});
