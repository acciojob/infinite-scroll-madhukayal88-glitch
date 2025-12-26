const list = document.getElementById("infi-list");

// Counter to keep track of items
let itemCount = 0;

// Function to add items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    itemCount++;
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// 1️⃣ Add 10 list items by default
addItems(10);

// 2️⃣ Detect when user reaches the end of the list
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // 3️⃣ Add 2 more items automatically
    addItems(2);
  }
});
