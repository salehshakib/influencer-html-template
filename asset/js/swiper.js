const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500, // Adjust the delay as needed
    disableOnInteraction: false, // Allows autoplay to continue after user interaction
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Makes pagination bullets clickable
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true, // Optional: hides the scrollbar when not in use
  },
});
