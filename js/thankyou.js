document.addEventListener('DOMContentLoaded', () => {
  // Generate random 6-digit Order ID
  const orderId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  // Get today's date
  const today = new Date();
  const orderDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Estimate delivery 3–5 days later
  const deliveryStart = new Date(today);
  deliveryStart.setDate(today.getDate() + 3);

  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(today.getDate() + 5);

  const deliveryEstimate = `Estimated delivery between ${deliveryStart.toLocaleDateString('en-US', {
    day: 'numeric', month: 'short'
  })} - ${deliveryEnd.toLocaleDateString('en-US', {
    day: 'numeric', month: 'short', year: 'numeric'
  })}`;

  // Get cart info
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  // Update DOM
  document.getElementById('orderId').textContent = orderId;
  document.getElementById('orderDate').textContent = orderDate;
  document.getElementById('orderItem').textContent = totalItems;
  document.getElementById('orderTotal').textContent = `$${totalPrice}`;
  document.getElementById('deliveryEstimate').textContent = deliveryEstimate;

  // Clear cart
  localStorage.removeItem('cart');

   // ✅ Update the cart badge after cart is cleared
  if (typeof updateCartBadge === 'function') {
    updateCartBadge();
  }
});


