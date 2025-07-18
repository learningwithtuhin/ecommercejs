function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartBody = document.querySelector(".cartbody");
  const emptyCartSection = document.getElementById("emptyCartSection");
  const tableWrapper = document.querySelector(".table-responsive");
  const cartSummary = document.getElementById("cartSummary");

  if (!cartBody) return;

  cartBody.innerHTML = "";

  if (cartItems.length === 0) {
    if (tableWrapper) tableWrapper.style.display = "none";
    if (cartSummary) cartSummary.style.display = "none";
    if (emptyCartSection) emptyCartSection.style.display = "block";
  } else {
    if (tableWrapper) tableWrapper.style.display = "block";
    if (cartSummary) cartSummary.style.display = "block";
    if (emptyCartSection) emptyCartSection.style.display = "none";

    cartItems.forEach(item => {
      const total = (item.price * item.quantity).toFixed(2);
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <div class="d-flex align-items-center">
            <img src="${item.image}" alt="${item.name}" class="img-fluid cartprod-img">
            <span>${item.name}</span>
          </div>
        </td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <div class="card-qty-wrap">
            <button class="card-minus" data-id="${item.id}">−</button>
            <input type="text" class="card-qty" value="${item.quantity}" readonly id="qty-${item.id}">
            <button class="card-plus" data-id="${item.id}">+</button>
          </div>
        </td>
        <td id="total-${item.id}">$${total}</td>
        <td>
          <button class="cross-btn" data-id="${item.id}">
            <i class="bi bi-x-lg"></i>
          </button>
        </td>
      `;
      cartBody.appendChild(row);
    });

    attachListeners();
  }

  updateCartTotals();
  updateCartBadge(); 
}

function attachListeners() {
  document.querySelectorAll(".card-minus").forEach(btn => {
    btn.addEventListener("click", () => updateQty(parseInt(btn.dataset.id, 10), -1));
  });

  document.querySelectorAll(".card-plus").forEach(btn => {
    btn.addEventListener("click", () => updateQty(parseInt(btn.dataset.id, 10), 1));
  });

  document.querySelectorAll(".cross-btn").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.id, 10)));
  });
}

function updateQty(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity < 1) item.quantity = 1;

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function updateCartTotals() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  subtotal = subtotal.toFixed(2);

  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("orderTotal");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
  if (totalEl) totalEl.textContent = `$${subtotal}`;
}

// document.addEventListener("DOMContentLoaded", renderCart);
document.addEventListener("DOMContentLoaded", () => {
  renderCart();         // shows cart table/items
  updateCartBadge();    // updates the badge on the bag icon
});
