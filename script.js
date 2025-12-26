const list = document.getElementById("infi-list");

// Start from 0 so numbering is correct
let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// 1. Initial Setup: Add 10 items by default
addItems(10);

// 2. Functionality: Detect end of scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // 3. Requirement: Add 2 more items automatically
    addItems(2);
  }
});
