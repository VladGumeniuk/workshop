const swiper = new Swiper(".example__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    996: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// ===========================================================
new Swiper(".example__swiper-two", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
// ==============================================
new Swiper(".reviews__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
