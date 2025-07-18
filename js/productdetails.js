const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

if (product) {
  // Set product name
  const productNameElement = document.getElementById("productName");
  if (productNameElement) productNameElement.textContent = product.name;

  // Set price
  const productPriceElement = document.getElementById("productPrice");
  const discount = product.discount || 0;
const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);
const originalPrice = product.price.toFixed(2);

if (productPriceElement) {
  if (discount > 0) {
    productPriceElement.innerHTML = `
      <span class="discount_price fw-semi-bold">$${discountedPrice}</span>
      <span class="old_price text-decoration-line-through ms-2">$${originalPrice}</span>
    `;
  } else {
    productPriceElement.textContent = `$${originalPrice}`;
  }
}

  // if (productPriceElement) productPriceElement.textContent = `$${product.price.toFixed(2)}`;

  // Set description
  const productDescription = document.querySelector(".productDescription");
  if (productDescription) productDescription.textContent = product.des;

  // Set size
  const productSizeElement = document.getElementById("productSize");
  if (productSizeElement) productSizeElement.textContent = product.size;

  // Inject images into sliders
  const mainSliderWrapper = document.getElementById("mainSliderWrapper");
  const thumbSliderWrapper = document.getElementById("thumbSliderWrapper");

  if (mainSliderWrapper && thumbSliderWrapper && product.images) {
    mainSliderWrapper.innerHTML = "";
    thumbSliderWrapper.innerHTML = "";

    product.images.forEach(imageUrl => {
      mainSliderWrapper.innerHTML += `
        <div class="swiper-slide"><img src="${imageUrl}" alt="${product.name}"></div>
      `;
      thumbSliderWrapper.innerHTML += `
        <div class="swiper-slide"><img src="${imageUrl}" alt="${product.name} thumbnail"></div>
      `;
    });

    // Initialize Swiper
    const thumbSwiper = new Swiper('.thumbs-slider', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper('.main-slider', {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  }

  // Set wishlist icon
  const wishlistWrapper = document.getElementById("wishlistIconWrapper");
  if (wishlistWrapper) {
    wishlistWrapper.innerHTML = `
      <i class="bi bi-heart wishlist-toggle-icon" data-id="${product.id}" style="cursor:pointer;"></i>
    `;

    // Important: Wait for DOM insertion before updating icons
    setTimeout(() => {
      updateWishlistIcons();
    }, 0);
  }

  // Quantity functions
  window.increaseQty = function () {
    const qtyInput = document.getElementById("qty");
    let qty = parseInt(qtyInput.value);
    qtyInput.value = qty + 1;
  };

  window.decreaseQty = function () {
    const qtyInput = document.getElementById("qty");
    let qty = parseInt(qtyInput.value);
    if (qty > 1) qtyInput.value = qty - 1;
  };

  // Add to cart
  window.addToCart = function () {
  const qty = parseInt(document.getElementById("qty").value);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === product.id);
  const discount = product.discount || 0;
  const finalPrice = parseFloat(product.price * (1 - discount / 100)).toFixed(2);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: parseFloat(finalPrice),
      quantity: qty,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  showToast(`${product.name} added to cart`, product.image);

  // 👇 Redirect to cart page after short delay
  setTimeout(() => {
    window.location.href = "cart.html";
  }, 1500); // 1.5 seconds delay
};

  

  // Inject specification rows into the table
const specTableBody = document.querySelector("#productDetailsTable tbody");

if (specTableBody && product.specifications) {
  specTableBody.innerHTML = ""; // Clear existing rows

  for (const key in product.specifications) {
    if (product.specifications.hasOwnProperty(key)) {
      const value = product.specifications[key];
      const row = `
        <tr>
          <td>${key}</td>
          <td>${value}</td>
        </tr>
      `;
      specTableBody.insertAdjacentHTML("beforeend", row);
    }
  }
}

}

// Toast function (only if not defined globally)
function showToast(message, imageUrl, bgColor = "#141414") {
  const toastId = `toast-${Date.now()}`;
  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="background: ${bgColor}">
      <div class="d-flex align-items-center" style="padding: 10px">
        <img src="${imageUrl}" alt="Product Image" class="rounded me-2" style="width: 60px; height: 60px; object-fit: cover;">
        <div class="toast-body text-white">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  const container = document.getElementById("toastContainer");
  if (container) {
    container.insertAdjacentHTML("beforeend", toastHTML);
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
}
