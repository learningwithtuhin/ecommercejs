document.addEventListener("DOMContentLoaded", function () {
  updateWishlistIcons();
  updateWishlistBadge();

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("wishlist-toggle-icon")) {
      const icon = e.target;
      const productId = icon.dataset.id;

      // ✅ Step 1: Check if user is logged in
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        window.location.href = "login.html";
        return;
      }

      // ✅ Step 2: Toggle wishlist for logged-in user
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      // if (wishlist.includes(productId)) {
      //   wishlist = wishlist.filter(id => id !== productId);
      // } else {
      //   wishlist.push(productId);
      // }

      const product = products.find(p => p.id === parseInt(productId));
if (!product) return;

if (wishlist.includes(productId)) {
  wishlist = wishlist.filter(id => id !== productId);
  showToast(`${product.name} removed from wishlist`, product.image, "#dc3545");
} else {
  wishlist.push(productId);
  showToast(`${product.name} added to wishlist`, product.image, "#333");
}


      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlistIcons();
      updateWishlistBadge();


    }
  });
});

function updateWishlistIcons() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  document.querySelectorAll(".wishlist-toggle-icon").forEach(icon => {
    const id = icon.dataset.id;

    if (wishlist.includes(id)) {
      icon.classList.add("text-danger");        // Make it red
      icon.classList.remove("bi-heart");        // Remove outline
      icon.classList.add("bi-heart-fill");      // Add filled heart
    } else {
      icon.classList.remove("text-danger");     // Remove red
      icon.classList.remove("bi-heart-fill");   // Remove filled
      icon.classList.add("bi-heart");           // Restore outline
    }
  });
}

function updateWishlistBadge() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const badge = document.getElementById("wishlistCountBadge");

  if (badge) {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? "inline-block" : "none";
  }
}



// ✅ Wishlist Page Product Rendering
const wishlistContainer = document.getElementById("wishlistContainer");
const countText = document.getElementById("wishlistCountText");

if (wishlistContainer && countText) {
  renderWishlistPage();
}

function renderWishlistPage() {
  wishlistContainer.innerHTML = "";

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const productsInWishlist = products.filter(product => wishlist.includes(product.id.toString()));

  countText.textContent = `${productsInWishlist.length} items`;

  if (productsInWishlist.length === 0) {
    wishlistContainer.innerHTML = `<p class="text-center">Your wishlist is empty.</p>`;
    return;
  }

  productsInWishlist.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    card.innerHTML = `
      <div class="wishlist-card position-relative p-3 border rounded shadow-sm h-100">
        <button class="remove-btn position-absolute top-0 end-0 m-2 fs-5" data-id="${product.id}">&times;</button>
        <a href="productdetails.html?id=${product.id}" class="text-decoration-none text-dark">
          <div class="wishlist-img text-center mb-3">
            <img src="${product.image}" alt="${product.name}" class="img-fluid" />
          </div>
          <div class="wishlist-info text-left">
            <h5 class="wishlist-name">${product.name}</h5>
            <div class="stars"><img src="images/star.png" alt="stars"></div>
            <div class="wishlist-pricing mb-2">
             ${
    product.discount && product.discount > 0
      ? `<span class="wishlist-new-price">$${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
         <span class="wishlist-old-price text-decoration-line-through">$${product.price.toFixed(2)}</span>`
      : `<span class="wishlist-new-price">$${product.price.toFixed(2)}</span>`
  }
            </div>
          </div>
        </a>
        <button class="move-to-bag btn btn-outline-success w-100 mt-2" data-id="${product.id}">Move to Bag</button>
      </div>
    `;

    wishlistContainer.appendChild(card);
  });

  // Remove from wishlist
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.dataset.id;
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist = wishlist.filter(pid => pid !== id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlistBadge();
      renderWishlistPage();
    });
  });

  // ✅ Move to cart (bag)
  // ✅ Move to cart (bag)
document.querySelectorAll(".move-to-bag").forEach(button => {
  button.addEventListener("click", function () {
    const productId = parseInt(this.dataset.id);
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === productId);

    // ✅ Apply discount if exists
    const price = product.discount
      ? parseFloat((product.price * (1 - product.discount / 100)).toFixed(2))
      : product.price;

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: price,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge(); // Assumes this function exists globally
    showToast(`${product.name} added to cart`, product.image, "#333");

    // ✅ Remove from wishlist after adding to cart
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(pid => pid !== productId.toString());
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistBadge();
    renderWishlistPage();
  });
});

}

