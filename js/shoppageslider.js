// Step 1: Set dynamic values (simulate future JSON/DB values)
  const dynamicMin = 28;
  const dynamicMax = 60;

  const slider = document.getElementById('slider');
  const minInput = document.getElementById('minPrice');
  const maxInput = document.getElementById('maxPrice');

  // Step 2: Initialize slider
  noUiSlider.create(slider, {
    start: [dynamicMin, dynamicMax],
    connect: true,
    range: {
      min: dynamicMin,
      max: dynamicMax
    },
    format: {
      to: value => Math.round(value),
      from: value => Number(value)
    }
  });

  // Step 3: Slider ➜ Input binding
  slider.noUiSlider.on('update', function (values) {
    minInput.value = values[0];
    maxInput.value = values[1];
  });

  // Step 4: Input ➜ Slider binding
  [minInput, maxInput].forEach((input, index) => {
    input.addEventListener('change', function () {
      let values = [null, null];
      values[index] = this.value;
      slider.noUiSlider.set(values);
    });
  });


  //pagination

function setupPagination() {
  const itemsPerPage = 6;
  const productCards = document.querySelectorAll('.shop-card-inner');
  const pagination = document.getElementById('pagination');
  const resultsCount = document.getElementById('resultsCount');

  if (!pagination || !resultsCount || productCards.length === 0) return;

  const prevBtn = pagination.querySelector('.prev');
  const nextBtn = pagination.querySelector('.next');
  const pageLinks = pagination.querySelectorAll('.page-link:not([aria-label])'); // page numbers only

  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    productCards.forEach((card, index) => {
      card.closest('.col-md-4').style.display = index >= start && index < end ? 'block' : 'none';
    });

    resultsCount.textContent = `Showing ${start + 1}–${Math.min(end, productCards.length)} of ${productCards.length} results`;

    // Update active page
    pageLinks.forEach(link => link.parentElement.classList.remove('active'));
    if (pageLinks[page - 1]) {
      pageLinks[page - 1].parentElement.classList.add('active');
    }

    // Toggle prev/next visibility
    prevBtn.classList.toggle('d-none', page === 1);
    nextBtn.classList.toggle('d-none', page === Math.ceil(productCards.length / itemsPerPage));

    currentPage = page;
  }

  // Page number click
  pageLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showPage(index + 1);
    });
  });

  // Prev button click
  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentPage > 1) showPage(currentPage - 1);
  });

  // Next button click
  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentPage < Math.ceil(productCards.length / itemsPerPage)) {
      showPage(currentPage + 1);
    }
  });

  // Initial load
  showPage(1);
}


slider.noUiSlider.on('change', function () {
  if (typeof applyFilters === 'function') {
    applyFilters();
  }
});
