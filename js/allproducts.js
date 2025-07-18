const products = [
  {
    id: 1,
    name: "Night Serum",
    price: 40,
    category: "faceserum",
    image: "images/main1.png",
    images: [
      "images/main1-1.png",
      "images/main1-2.png",
      "images/main1-3.png"
    ],
    des: ` Revitalize Your Skin Overnight With Our Advanced Night Serum. 
      Infused With Potent Antioxidants And Nourishing Botanicals, It Works To Restore Skin Elasticity And Brightness 
      While You Sleep.`,
      size: "75ml",
      specifications: {
      "Product Name": "Advanced Night Serum",
      "Skin Type": "All Skin Types",
      "Texture": "Lightweight, Non-Greasy Serum",
      "Key Ingredients": "Retinol, Vitamin C, Peptides",
      "Usage Time": "Night",
      "Fragrance Free": "Yes"
    },
    isNew: false
  },
  {
    id: 2,
    name: "Face Cream",
    price: 50,
    category: "facecream",
    image: "images/main2.png",
    images: [
      "images/main2-1.png",
      "images/main2-2.png",
      "images/main2-3.png"
    ],
     des: ` Experience deep hydration with our luxurious Face Cream, formulated to restore your skin's natural glow. 
     This lightweight, non-greasy cream absorbs quickly to leave your skin feeling soft, 
     smooth, and replenished. Suitable for all skin types, it's perfect for both morning and night use`,
      size: "30ml",
      specifications: {
      "Product Name": "Face Cream",
      "Skin Type": "All Skin Types",
      "Texture": "Rich, Non-Greasy Cream",
      "Key Ingredients": "Hyaluronic Acid, Vitamin E, Aloe Vera",
      "Usage Time": "Night",
      "Fragrance Free": "Yes"
    },
    isNew: true
  },
  {
    id: 3,
    name: "Classic Shampoo",
    price: 28,
    category: "hairshampoo",
     image: "images/main3.png",
    images: [
      "images/main3-1.png",
      "images/main3-2.png",
      "images/main3-3.png"
    ],
     des: ` Fabish Classic Shampoo is a nourishing formula designed for healthy, lustrous hair. 
     Infused with organic, natural, and pure plant-derived ingredients such as Rahua and Palo Santo oils, 
     this shampoo gently cleanses while restoring shine and softness. Sourced from the rainforest, 
     its ingredients promote scalp health and hydration without harsh chemicals. 
     Ideal for color-treated hair, it’s safe, sulfate-free, and perfect for daily use.`,
      size: "275ml",
      specifications: {
      "Product Name": "Classic Shampoo",
  "Hair Type": "All Hair Types",
  "Texture": "Lightweight, Nourishing Shampoo",
  "Key Ingredients": "Rahua Oil, Palo Santo Oil",
  "Usage Time": "Daily",
  "Safe for Color-Treated Hair": "Yes"
    },
    isNew: false
  },
  {
    id: 4,
    name: "Skin Toner",
    price: 36,
    category: "toner",
    image: "images/main4.png",
   images: [
      "images/main4-1.png",
      "images/main4-2.png",
      "images/main4-3.png"
    ],
     des: ` Refresh and revitalize your skin with Fabish Green Tea Glow Toner. Infused with antioxidant-rich green tea, 
     it helps to minimize pores, soothe irritation, and restore natural glow. Free from alcohol and parabens, 
     it’s the perfect addition to your daily skincare routine.`,
      size: "200ml",
      specifications: {
  "Product Name": "Green Tea Glow Toner",
  "Skin Type": "All Skin Types",
  "Texture": "Refreshing Liquid Mist",
  "Key Ingredients": "Green Tea Extract, Purified Water",
  "Usage Time": "Day & Night",
  "Alcohol Free": "Yes",
  "Paraben Free": "Yes"
},
    isNew: true
  },
  {
    id: 5,
    name: "Face Cream",
    price: 40,
    category: "facecream",
    image: "images/main5.png",
    images: [
      "images/main5-1.png",
      "images/main5-2.png",
      "images/main5-3.png"
    ],
     des: ` Fabish Face Cream is a nourishing daily moisturizer crafted to deeply hydrate and restore your skin’s 
     natural glow. This lightweight, non-greasy formula absorbs quickly and works to improve skin texture, 
     reduce fine lines, and even out tone. `,
      size: "200ml",
      specifications: {
  "Skin Type": "All Skin Types",
  "Texture": "Lightweight, Non-Greasy Cream",
  "Key Ingredients": "Retinol, Vitamin C, Peptides, Aloe Vera",
  "Usage Time": "Day and Night",
  "Benefits": "Hydrates, reduces fine lines & dullness",
  "Free From": "Parabens, Sulfates, Mineral Oils",
},
    isNew: false
  },
  {
    id: 6,
    name: "Skin Serum",
    price: 50,
    category: "faceserum",
    image: "images/main6.png",
     images: [
      "images/main6-1.png",
      "images/main6-2.png",
      "images/main6-3.png"
    ],
     des: ` Fabish Skin Serum is a rejuvenating facial treatment designed to deeply penetrate your skin and target signs 
     of aging, dullness, and dehydration. Formulated with powerful active ingredients like Vitamin C, Hyaluronic Acid, 
     and Niacinamide, it helps brighten the complexion, minimize fine lines, and maintain skin elasticity. 
     Lightweight and fast-absorbing, it is ideal for daily use to achieve smoother, glowing skin. `,
      size: "15ml",
      specifications: {
  "Skin Type": "All Skin Types",
  "Texture": "Lightweight, Non-Greasy Cream",
  "Key Ingredients": "Vitamin C, Hyaluronic Acid, Niacinamide",
  "Usage Time": "Morning & Night",
},
    isNew: true
  },
  {
    id: 7,
    name: "Body Lotion",
    price: 28,
    category: "bodylotion",
    image: "images/main7.png",
     images: [
      "images/main7-1.png",
      "images/main7-2.png",
      "images/main7-3.png"
    ],
     des: ` Pamper your skin with the nourishing care of Fabish Cocoa Soft Body Lotion. Infused with the richness of 
     cocoa butter and ayurvedic herbs, this ultra-hydrating formula locks in moisture for up to 24 hours, leaving your 
     skin irresistibly soft, glowing, and delicately scented. Specially designed for 
     dry skin, this lotion revitalizes dull, flaky skin to restore a smooth and radiant texture. `,
      size: "15ml",
      specifications: {
   "Skin Type": "Dry Skin",
  "Texture": "Rich, Non-Greasy Lotion",
  "Key Ingredients": "Cocoa Butter, Ayurvedic Herbal Extracts",
  "Usage Time": "After Bath or Whenever Skin Feels Dry",
  "Fragrance": "Mild Cocoa Aroma",
  "Shelf Life": "24 Months",
  "Quantity": "400ML",
  "Free From": "Parabens, Mineral Oils, Artificial Colors"
},
    isNew: false
  },
  {
    id: 8,
    name: "Green Tea Toner",
    price: 38,
    category: "toner",
    image: "images/main8.png",
     images: [
      "images/main8-1.png",
      "images/main8-2.png",
      "images/main8-3.png"
    ],
     des: `Fabish Premium Green Tea Skin Toner is a refreshing and purifying toner crafted to hydrate, balance, and tone 
     your skin. Infused with the natural power of green tea extract, it helps remove impurities, tighten pores, and soothe 
     the skin, leaving it feeling clean, smooth, and invigorated. Ideal for daily use to maintain a healthy, radiant 
     complexion. `,
      size: "100ml",
      specifications: {
   "Skin Type": "All Skin Types (Ideal for Oily & Sensitive Skin)",
  "Texture": "Watery, Lightweight Mist",
  "Key Ingredients": "Green Tea Extract, Witch Hazel, Aloe Vera",
  "Usage Time": "Morning & Evening"
},
    isNew: true
  },
    {
      id: 9,
    name: "Skin Toner",
    price: 45.00,
    category: "toner",
    image: "images/main9.png",
     images: [
      "images/main9-1.png",
      "images/main9-2.png",
      "images/main9-3.png"
    ],
     des: `Revitalize your skin with the gentle yet powerful Fabish Skin Toner, crafted to refresh, tone, and 
     balance your complexion naturally. Infused with botanical extracts and soothing ingredients, this toner works to 
     tighten pores, 
     remove residual impurities, and prep your skin for optimal hydration. `,
      size: "50ml",
      specifications: {
   "Skin Type": "All Skin Types (Ideal for Oily & Sensitive Skin)",
  "Texture": "Watery, Lightweight Mist",
  "Key Ingredients": "Botanical extracts",
  "Usage Time": "Morning & Evening"
},
    isNew: false,
    discount: 15
  },
    {
      id: 10,
    name: "Body Lotion",
    price: 36.00,
    category: "bodylotion",
    image: "images/main10.png",
     images: [
      "images/main10-1.png",
      "images/main10-2.png",
      "images/main10-3.png"
    ],
     des: `Indulge your skin in the refreshing care of nature with Fabish Green Tea Body Lotion, specially crafted to 
     deeply hydrate and soothe. Infused with antioxidant-rich green tea extract, this lightweight lotion nourishes your 
     skin while providing lasting hydration and a subtle, calming fragrance.`,
      size: "100ml",
      specifications: {
   "Skin Type": "All Skin Types (Ideal for Normal to Dry Skin)",
  "Texture": "Lightweight, Non-Greasy Cream",
  "Key Ingredients": "Green Tea Extract, Natural Moisturizers",
  "Usage Time": "Morning & Evening"
},
    isNew: true,
    discount: 20
  },
   {
    id: 11,
    name: "Day Cream",
    price: 51.00,
    category: "facecream",
    image: "images/main11.png",
     images: [
      "images/main11-1.png",
      "images/main11-2.png",
      "images/main11-3.png"
    ],
     des: `Our nourishing Day Cream is specially formulated to provide all-day moisture while protecting your skin from 
     daily environmental stressors. Enriched with vitamins, antioxidants, and SPF, it helps improve skin texture, reduce 
     dullness, and keep your complexion fresh and radiant.`,
      size: "30ml",
      specifications: {
  "Skin Type": "All Skin Types (Ideal for Normal to Dry Skin)",
  "Texture": "Lightweight, Non-Greasy Cream",
  "Key Ingredients": "Green Tea Extract, Natural Moisturizers",
  "Usage Time": "Morning & Evening",
  "Benefits": "Deep Hydration, Skin Soothing",
  "SPF Protection": "Yes",
  "Absorption": "Fast-absorbing, Leaves no residue",
  "Fragrance": "Mild, Natural Scent",

},
    isNew: false,
    discount: 20
  },
   {
    id: 12,
    name: "Moisturizer",
    price: 54.00,
    category: "moisturizer",
    image: "images/main12.png",
     images: [
      "images/main12-1.png",
      "images/main12-2.png",
      "images/main12-3.png"
    ],
     des: `Our everyday Moisturizer delivers long-lasting hydration with a lightweight, skin-friendly formula. 
     Enriched with natural botanicals and hydrating agents, it helps restore the skin's moisture barrier, leaving it 
     soft, supple, and refreshed. Ideal for daily use, it absorbs quickly without clogging pores or leaving a greasy 
     residue.`,
      size: "100ml",
      specifications: {
  "Skin Type": "All Skin Types",
  "Texture": "Silky, Lightweight Lotion",
  "Key Ingredients": "Hyaluronic Acid, Aloe Vera, Vitamin E",
  "Usage Time": "Morning & Night",
  "Benefits": "Deep Hydration, Skin Soothing",
  "SPF Protection": "Yes",

},
    isNew: true,
    discount: 10
  }
];

// header
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  const overlay = document.getElementById("menuOverlay");

  // Open the mobile menu
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent bubbling to document
    mobileMenu.classList.add("open");
    overlay.classList.add("menushow");
  });

  // Close the mobile menu via close button
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.remove("open");
    overlay.classList.remove("menushow");
  });

  // Close when clicking outside the menu
  document.addEventListener("click", function (e) {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
      mobileMenu.classList.remove("open");
      overlay.classList.remove("menushow");
    }
  });

  if (overlay) {
    overlay.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      overlay.classList.remove("menushow");
    });
  }

  // Prevent click inside menu from bubbling to document
  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // ✅ Highlight current active nav link
  const currentPath = window.location.pathname.split("/").pop(); // e.g. "shop.html"
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active");
    }
  });
});






// this is for the first slider start

const slideWrapper = document.getElementById("productSlides");

if (slideWrapper) {
  products.slice(0, 7).forEach(product => {
    const badgeHTML = product.isNew ? `<span class="badge">New</span>` : "";
    
    const slide = document.createElement("div");
    slide.className = "swiper-slide product-card";
    slide.innerHTML = `
      <div class="swipper-inner">
        ${badgeHTML}
        <a href="productdetails.html?id=${product.id}">
          <div class="slider-img">
            <img src="${product.image}" alt="${product.name}" />
          </div>
        </a>
        <ul class="prod-icon">
          <li><a href="productdetails.html?id=${product.id}"><i class="bi bi-eye"></i></a></li>
          <li><a href="#"><i class="wishlist-toggle-icon bi bi-heart" data-id="${product.id}"></i></a></li>
          <li><a href="#" class="add-to-cart-btn" data-id="${product.id}"><i class="bi bi-bag"></i></a></li>
        </ul>
        <a href="productdetails.html?id=${product.id}">
          <div class="slider-txt">
            <h4>${product.name}</h4>
            <div class="stars"><img src="images/star.png" alt="stars" /></div>
            <p>$${product.price.toFixed(2)}</p>
          </div>
        </a>
      </div>
    `;
    slideWrapper.appendChild(slide);
  });
}



// this is for the second slider start

const latestSlideWrapper = document.getElementById("latestProductSlides");

if (latestSlideWrapper) {
  products.slice(5, 12).forEach(product => {
    const badgeHTML = product.isNew ? `<span class="badge">New</span>` : "";

    const discount = product.discount || 0;
    const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);
    const oldPrice = product.price.toFixed(2);

    const slide = document.createElement("div");
    slide.className = "swiper-slide product-card";
    slide.innerHTML = `
      <div class="swipper-inner">
        ${badgeHTML}
        <a href="productdetails.html?id=${product.id}">
          <div class="slider-img">
            <img src="${product.image}" alt="${product.name}" />
          </div>
        </a>
       <ul class="prod-icon">
  <li><a href="productdetails.html?id=${product.id}"><i class="bi bi-eye"></i></a></li>
  <li><a href="#"><i class="bi bi-heart wishlist-toggle-icon" data-id="${product.id}"></i></a></li>
  <li><a href="#" class="add-to-cart-btn" data-id="${product.id}"><i class="bi bi-bag"></i></a></li>
</ul>
        <a href="productdetails.html?id=${product.id}">
          <div class="slider-txt">
            <h4>${product.name}</h4>
            <div class="stars"><img src="images/star.png" alt="stars" /></div>
            <div class="latest-pricing">
              <span class="latest-new-price">$${discountedPrice}</span>
              ${discount > 0 ? `<span class="latest-old-price">$${oldPrice}</span>` : ""}
            </div>
          </div>
        </a>
      </div>
    `;

    latestSlideWrapper.appendChild(slide);
  });

  latestproductSwiper.update();
}





// this is for mini card
const miniProductContainer = document.getElementById("miniProductContainer");

if (miniProductContainer) {
  const lastFourProducts = products.slice(-4);

  lastFourProducts.forEach((product) => {
    const discount = product.discount || 0; // Fallback to 0% if undefined
    const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);
    const oldPrice = product.price.toFixed(2);
    const discountText = `${discount}% Off`;

    const miniCard = document.createElement("div");
    miniCard.className = "col-md-6 col-sm-6";

    miniCard.innerHTML = `
      <div class="mini-product-card">
        <div class="mini-discount-badge">${discountText}</div>
        <div class="mini-product-flex">
          <a href="productdetails.html?id=${product.id}">
            <div class="mini-product-img">
              <img src="${product.image}" alt="${product.name}">
            </div>
          </a>
          <div class="mini-product-details">
            <a href="productdetails.html?id=${product.id}"><h4 class="mini-product-title">${product.name}</h4></a>
            <div class="mini-rating-stars">
              <a href="#"><img src="images/4star.png" alt="Rating"></a>
            </div>
            <div class="mini-pricing">
              <a href="productdetails.html?id=${product.id}"><span class="mini-new-price">$${discountedPrice}</span></a>
              <span class="mini-old-price">$${oldPrice}</span>
            </div>
          </div>
        </div>
        <ul class="prod-icon">
  <li><a href="productdetails.html?id=${product.id}"><i class="bi bi-eye"></i></a></li>
  <li><a href="#"><i class="bi bi-heart wishlist-toggle-icon" data-id="${product.id}"></i></a></li>
  <li><a href="#" class="add-to-cart-btn" data-id="${product.id}"><i class="bi bi-bag"></i></a></li>
</ul>
      </div>
    `;

    miniProductContainer.appendChild(miniCard);
  });
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cartCountBadge");

  if (badge) {
    const totalTypes = cart.length; // show number of different products
    badge.textContent = totalTypes;
    badge.style.display = totalTypes > 0 ? "inline-block" : "none";
  }
}






// for first slider add to cart data id rendering
document.addEventListener("click", function (e) {
  if (e.target.closest(".add-to-cart-btn")) {
    e.preventDefault();

    const btn = e.target.closest(".add-to-cart-btn");
    const productId = parseInt(btn.getAttribute("data-id"));
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const discount = product.discount || 0;
    const finalPrice = parseFloat(product.price * (1 - discount / 100)).toFixed(2);

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1; // increase quantity
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: parseFloat(finalPrice),
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge(); // Update badge
    showToast(`${product.name} added to cart`, product.image, "#333");
  }
});

//for shop page card dynamic
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("productContainer");
  const searchInput = document.getElementById("searchInput");
  const checkboxes = document.querySelectorAll(".item-checkbox input[type='checkbox']");
  const pagination = document.getElementById("pagination");
  const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

  const itemsPerPage = 6;
  let currentPage = 1;
  let currentList = [...products];

  if (!productContainer) return;

  // ✅ Render products with pagination
  function renderPaginatedProducts(productList, page = 1) {
    productContainer.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = productList.slice(start, end);
    const total = productList.length;
const showingFrom = total === 0 ? 0 : start + 1;
const showingTo = Math.min(end, total);

const resultsCount = document.getElementById("resultsCount");
if (resultsCount) {
  resultsCount.textContent = `Showing ${showingFrom}–${showingTo} of ${total} results`;
}


    paginatedItems.forEach(product => {
      const card = document.createElement("div");
      card.className = "col-md-4 shop-card-inner";

      const discount = product.discount || 0;
      const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);
      const originalPrice = product.price.toFixed(2);

      const priceHTML = discount > 0
        ? `<p><span class="new-price">$${discountedPrice}</span> <span class="text-decoration-line-through old-price">$${originalPrice}</span></p>`
        : `<p>$${originalPrice}</p>`;

      const badgeHTML = product.isNew ? `<span class="badge">New</span>` : "";

      card.innerHTML = `
        ${badgeHTML}
        <a href="productdetails.html?id=${product.id}">
          <div class="shop-card-img">
            <img src="${product.image}" alt="${product.name}">
          </div>
        </a>
        <ul class="prod-icon">
          <li><a href="productdetails.html?id=${product.id}"><i class="bi bi-eye"></i></a></li>
          <li><a href="#"><i class="wishlist-toggle-icon bi bi-heart" data-id="${product.id}"></i></a></li>
          <li><a href="#" class="add-to-cart-btn" data-id="${product.id}"><i class="bi bi-bag"></i></a></li>
        </ul>
        <a href="productdetails.html?id=${product.id}">
          <div class="shop-card-txt">
            <h4>${product.name}</h4>
            <div class="stars"><img src="images/star.png" alt="stars"></div>
            ${priceHTML}
          </div>
        </a>
      `;

      productContainer.appendChild(card);
    });

    setupPagination(productList);
  }

  // Setup pagination
 function setupPagination(productList) {
  if (!pagination) return;

  pagination.innerHTML = "";
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  // ⏮️ Previous Button
  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&laquo;";
    prevBtn.className = "pagination-btn rounded-circle prev-btn";
    prevBtn.addEventListener("click", () => {
      currentPage--;
      renderPaginatedProducts(productList, currentPage);
    });
    pagination.appendChild(prevBtn);
  }

  // 🔢 Page Numbers
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.className = `pagination-btn rounded-circle ${i === currentPage ? "active" : ""}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderPaginatedProducts(productList, currentPage);
    });
    pagination.appendChild(btn);
  }

  // ⏭️ Next Button
  if (currentPage < pageCount) {
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&raquo;";
    nextBtn.className = "pagination-btn rounded-circle next-btn";
    nextBtn.addEventListener("click", () => {
      currentPage++;
      renderPaginatedProducts(productList, currentPage);
    });
    pagination.appendChild(nextBtn);
  }
}



  // ✅ Filter based on search + selected checkboxes
  function applyFilters() {
  const searchText = searchInput?.value.trim().toLowerCase() || "";

  const selectedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
  const allChecked = selectedCheckboxes.some(cb => cb.id === "all");

  let selectedCategories = [];
  if (!allChecked) {
    selectedCategories = selectedCheckboxes
      .filter(cb => cb.id !== "all")
      .map(cb => cb.id);
  }

  const minPrice = parseFloat(minPriceInput?.value) || 0;
  const maxPrice = parseFloat(maxPriceInput?.value) || Infinity;

  currentList = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchText);
    const matchCategory = allChecked || selectedCategories.length === 0
      ? true
      : selectedCategories.includes(product.category);
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  currentPage = 1;
  renderPaginatedProducts(currentList, currentPage);
}
window.applyFilters = applyFilters;



  // ✅ Checkbox behavior for "all"
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const isAll = cb.id === "all";

      if (isAll && cb.checked) {
        // Uncheck others if "All" is selected
        checkboxes.forEach(other => {
          if (other.id !== "all") other.checked = false;
        });
      } else if (!isAll) {
        // If any specific is checked, uncheck "All"
        document.getElementById("all").checked = false;

        // If none are checked, re-check "All"
        const anyChecked = Array.from(checkboxes).some(box =>
          box.id !== "all" && box.checked
        );
        if (!anyChecked) document.getElementById("all").checked = true;
      }

      applyFilters();
    });
  });

  // ✅ Search event
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // ✅ Initial render
  applyFilters();
});




//login logout authetication
document.addEventListener("DOMContentLoaded", function () {
  const userData = localStorage.getItem("user") || sessionStorage.getItem("user");
  const dropdownMenu = document.getElementById("userDropdownMenu");

  if (!dropdownMenu) return;

  // Clear any existing items
  dropdownMenu.innerHTML = "";

  if (userData) {
    // Show logout
    dropdownMenu.innerHTML = `
      <li><a href="#" onclick="logout()">Logout</a></li>
    `;
  } else {
    // Show login
    dropdownMenu.innerHTML = `
      <li><a href="login.html">Login</a></li>
    `;
  }
});

function logout() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
}





// function showToast(message, imageUrl, bgColor = "#333") {
//   const container = document.getElementById("toastContainer");
//   if (!container) return console.error("❌ toastContainer not found!");

//   const toastId = `toast-${Date.now()}`;
//   const toastHTML = `
//     <div id="${toastId}" class="toast align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="background: ${bgColor};">
//       <div class="d-flex align-items-center p-2">
//         <img src="${imageUrl}" alt="Product Image" class="rounded me-2" style="width: 60px; height: 60px; background-color: #fff; object-fit: cover;">
//         <div class="toast-body text-white">
//           ${message}
//         </div>
//         <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//       </div>
//     </div>
//   `;

//   container.insertAdjacentHTML("beforeend", toastHTML);

//   const toastElement = document.getElementById(toastId);
//   const toast = new bootstrap.Toast(toastElement);
//   toast.show();
// }

function showToast(message, imageUrl, bgColor = "#333") {
  const container = document.getElementById("toastContainer");
  if (!container) return console.error("❌ toastContainer not found!");

  const toastId = `toast-${Date.now()}`;
  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="background: ${bgColor};">
      <div class="d-flex align-items-center p-2">
        <img src="${imageUrl}" alt="Product Image" class="rounded me-2" style="width: 60px; height: 60px; background-color: #fff; object-fit: cover;">
        <div class="toast-body text-white">
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", toastHTML);

  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}


document.addEventListener("DOMContentLoaded", updateCartBadge);


















