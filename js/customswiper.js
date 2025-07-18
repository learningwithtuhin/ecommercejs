//for testimonial
const swiper = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });

  //for top loved slider

  var productSwiper = new Swiper('.mySwiperProducts', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });

  //for latest slider

    var latestproductSwiper = new Swiper('.mylatestProducts', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });

  //product details product slider
  // const thumbSwiper = new Swiper(".thumbs-slider", {
  //   spaceBetween: 10,
  //   slidesPerView: 3,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });

  // const mainSwiper = new Swiper(".main-slider", {
  //   spaceBetween: 10,
  //   thumbs: {
  //     swiper: thumbSwiper,
  //   },
  // });

   