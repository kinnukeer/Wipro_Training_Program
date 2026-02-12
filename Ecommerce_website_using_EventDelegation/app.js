// Get references
const cart = document.getElementById('cart');
const addItemBtn = document.getElementById('addItem');
const clearCartBtn = document.getElementById('clearCart');
const favouriteBtn = document.getElementById('favourite');

let productCount = 1;

// Event Delegation: handle clicks inside the cart
cart.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove')) {
    event.target.parentElement.remove();
  }
});

// Add new product dynamically
addItemBtn.addEventListener('click', function() {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <span>Product ${productCount++}</span>
    <button class="remove">Remove</button>
  `;
  cart.appendChild(item);
});
