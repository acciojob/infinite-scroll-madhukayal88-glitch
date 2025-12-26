const list = document.getElementById("infi-list");

// 1. Initial Setup: Add 10 list items by default
let itemCount = 10;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    // Ensure the text matches the video: "Item 1", "Item 2", etc.
    li.textContent = `Item ${itemCount - 9 + i}`; 
    list.appendChild(li);
  }
  itemCount += count;
}

// Populate the first 10 items immediately
addItems(10);

// 2. Functionality: Detect the end of the list
list.addEventListener("scroll", () => {
  // Use Math.ceil to handle high-resolution (Retina) screens where scroll values can be decimals
  const scrollPosition = Math.ceil(list.scrollTop + list.clientHeight);
  const totalHeight = list.scrollHeight;

  // 3. Add 2 more items automatically when the end is reached
  if (scrollPosition >= totalHeight) {
    addItems(2);
  }
});