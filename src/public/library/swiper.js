var swiper1 = new Swiper(".mySwiper", {
  loop: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  loadPrevNext: true,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  slidesPerGroup: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  preloadImages: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
