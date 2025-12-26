const list = document.getElementById("infi-list");

// 1. Initial Setup: Add 10 items by default
let itemCount = 10;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial call to populate the list
addItems(10);

// 2. Functionality: Detect end of scroll
list.addEventListener("scroll", () => {
  // scrollTop: How much the user has scrolled from the top
  // clientHeight: The height of the visible part of the list
  // scrollHeight: The total height of the content (including hidden part)
  
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    // 3. Requirement: Add 2 more items automatically
    addItems(2);
  }
});