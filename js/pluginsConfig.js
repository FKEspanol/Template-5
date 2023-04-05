(function () {
  const selectClass = (className) => [
    ...document.getElementsByClassName(className),
  ];

  // AOS configuration ---------------------------------/*
  AOS.init({
    once: true,
    duration: 2000,
  });

  // Isotope filter configuration on Portfolio section ---------------------------------/*
  const portfolioContainer = document.querySelector(".portfolio-container");
  var iso = new Isotope(portfolioContainer, {
    itemSelector: ".portfolio-item",
  });

  var portfolioFilters = document.getElementById("portfolio-filters");
  portfolioFilters.addEventListener("click", function (event) {
    event.preventDefault();
    selectClass("filter-btn").forEach((btn) =>
      btn.classList.remove("my-btn-primary")
    );
    event.target.classList.add("my-btn-primary");
    iso.arrange({ filter: event.target.getAttribute("data-filter") });
  });

  // swiper js configuration ---------------------------------/*
  new Swiper(".swiper", {
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

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragClass: "swiper-scrollbar-drag",
    },
  });
})();
