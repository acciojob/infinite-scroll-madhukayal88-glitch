const list = document.getElementById("list");
let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Check if user reached bottom
  if (scrollTop + windowHeight >= documentHeight - 5) {
    addItems(2);
  }
});
