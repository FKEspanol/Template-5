// AOS configuration ---------------------------------/*
AOS.init({
  once: true,
  duration: 2000,
});

// Isotope configuration ---------------------------------/*
// var iso = new Isotope(".isotope-items", {
//   itemSelector: ".item",
//   layoutMode: "masonry",
// });

// var filtersElem = document.querySelector(".filters-button-group");
// filtersElem.addEventListener("click", function (event) {
//   var filterValue = event.target.getAttribute("data-filter");
//   iso.arrange({ filter: filterValue });
// });

// swiper configuration ---------------------------------/*
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "swiper-pagination-bullet-active bg-white",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
