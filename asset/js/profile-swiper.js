const swiper = new Swiper(".custom-swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 4000, // Adjust the delay as needed
    disableOnInteraction: false, // Allows autoplay to continue after user interaction
  },

  // Pagination
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true, // Makes pagination bullets clickable
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".custom-swiper-scrollbar",
    hide: true, // Optional: hides the scrollbar when not in use
  },
});
