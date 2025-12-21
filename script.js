const container = document.getElementById("container");
const list = document.getElementById("list");

let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Infinite scroll inside container
container.addEventListener("scroll", () => {
  const scrollTop = container.scrollTop;
  const clientHeight = container.clientHeight;
  const scrollHeight = container.scrollHeight;

  // Check if user reached bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});
