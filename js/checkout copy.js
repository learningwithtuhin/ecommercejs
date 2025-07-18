document.addEventListener('DOMContentLoaded', function () {
    const selectIds = [
      'state',
      'country',
      'paymentMethod',
      'expiryMonth',
      'expiryYear'
    ];

    selectIds.forEach(function (id) {
      const selectElement = document.getElementById(id);
      if (!selectElement) return;

      // Initial color on page load
      updateSelectColor(selectElement);

      // Update color on change
      selectElement.addEventListener('change', function () {
        updateSelectColor(this);
      });
    });

    function updateSelectColor(selectElement) {
      if (selectElement.value === '') {
        selectElement.classList.remove('text-dark');
        selectElement.classList.add('text-muted');
      } else {
        selectElement.classList.remove('text-muted');
        selectElement.classList.add('text-dark');
      }
    }
  });

//dynamic render the product from cart
function renderCheckoutSummary() {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("checkoutSummary");

  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let subtotal = 0;
  let productHTML = "";

  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    productHTML += `
      <div class="checkout-item">
        <div class="checkout-item-inner">
          <a href="productdetails.html?id=${item.id}">
            <div class="checkout-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="checkout-item-details">
              <p>${item.name}</p>
              <p>Qty: ${item.quantity}</p>
            </div>
          </a>
        </div>
        <div class="checkout-price">$${itemTotal.toFixed(2)}</div>
      </div>
    `;
  });

  const total = subtotal.toFixed(2);

  container.innerHTML = `
    <h3>Your Order</h3>
    <div class="checkout-wrap">
      ${productHTML}
      <div class="checkout-right-lower">
        <div class="d-flex justify-content-between checkout-right-row">
          <span>Cart Subtotal</span>
          <span id="cartSubtotal">$${total}</span>
        </div>
        <div class="d-flex justify-content-between checkout-right-row">
          <span>Shipping & Handling</span>
          <span class="free-text">FREE</span>
        </div>
      </div>
      <div class="d-flex justify-content-between checkout-total">
        <span>Order Total</span>
        <span id="orderTotal">$${total}</span>
      </div>
    </div>
  `;
}

// validation


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  const fields = form.querySelectorAll('input, select');

  function validateField(field) {
    const name = field.name;
    const value = field.type === 'checkbox' ? field.checked : field.value.trim();
    const wrapper = field.closest('div');
    const errorDiv = wrapper ? wrapper.querySelector('.error-message') : null;
    let message = '';

    switch (name) {
      case 'firstName':
        if (value === '') message = 'First name is required.';
        break;

      case 'lastName':
        if (value === '') message = 'Last name is required.';
        break;

      case 'phone':
        if (value === '') {
          message = 'Phone is required.';
        } else if (!/^\d{10,15}$/.test(value)) {
          message = 'Enter a valid phone number.';
        }
        break;

      case 'email':
        if (value === '') {
          message = 'Email is required.';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          message = 'Enter a valid email address.';
        }
        break;

      case 'address':
        if (value === '') message = 'Address is required.';
        break;

      case 'state':
        if (value === '') message = 'State is required.';
        break;

      case 'country':
        if (value === '') message = 'Country is required.';
        break;

      case 'city':
        if (value === '') message = 'City is required.';
        break;

      case 'zipcode':
        if (value === '') {
          message = 'Zipcode is required.';
        } else if (!/^\d{4,10}$/.test(value)) {
          message = 'Enter a valid zipcode.';
        }
        break;

      case 'paymentMethod':
        if (value === '') message = 'Payment method is required.';
        break;

      case 'cardNumber':
        if (value === '') {
          message = 'Card number is required.';
        } else if (!/^\d{13,19}$/.test(value)) {
          message = 'Enter a valid card number.';
        }
        break;

      case 'expiryMonth':
        if (value === '') message = 'Expiry month is required.';
        break;

      case 'expiryYear':
        if (value === '') message = 'Expiry year is required.';
        break;

      case 'cvv':
        if (value === '') {
          message = 'CVV is required.';
        } else if (!/^\d{3,4}$/.test(value)) {
          message = 'Enter a valid CVV.';
        }
        break;

      case 'termsCheckbox':
        if (!value) message = 'You must agree to the terms.';
        break;
    }

    if (errorDiv) {
      errorDiv.textContent = message;
    }

    return message === '';
  }

  // Live validation: clear error as user types or selects
  fields.forEach(field => {
    const eventType = field.type === 'checkbox' || field.tagName.toLowerCase() === 'select' ? 'change' : 'input';

    field.addEventListener(eventType, () => {
      validateField(field);
    });
  });

  // Submit validation
  form.addEventListener('submit', function (e) {
    let isValid = true;
    fields.forEach(field => {
      const result = validateField(field);
      if (!result) isValid = false;
    });
    if (!isValid) {
      e.preventDefault();
    }
  });
});

