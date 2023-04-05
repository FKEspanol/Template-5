(function () {
  "use strict";
  /**
   *
   * @param {string} query
   * any css selector
   * @param {boolean} all
   * @returns
   */
  const select = (query, all = false) => {
    query = query.trim();
    if (all) {
      return [...document.querySelectorAll(query)];
    } else return document.querySelector(query);
  };

  /**
   *
   * @param {string} event
   * event name
   * @param {string} query
   * querySelector string
   * @param {Function} listener
   * @param {boolean} all
   */
  const on = (event, query, listener, all = false) => {
    let selectElement = select(query, all);
    if (selectElement) {
      if (all) {
        selectElement.forEach((el) => el.addEventListener(event, listener));
      } else {
        selectElement.addEventListener(event, listener);
      }
    }
  };

  // AOS configuration ---------------------------------/*
  AOS.init({
    once: true,
    duration: 2000,
  });

  // Isotope filter configuration on Portfolio section ---------------------------------/*
  const portfolioContainer = select(".portfolio-container");
  var iso = new Isotope(portfolioContainer, {
    itemSelector: ".portfolio-item",
  });

  on(
    "click",
    "#portfolio-filters",
    function (e) {
      e.preventDefault();
      select(".filter-btn", true).forEach((btn) => {
        btn.classList.remove("my-btn-primary");
      });
      e.target.classList.add("my-btn-primary");
      iso.arrange({ filter: e.target.getAttribute("data-filter") });
    },
    false
  );
  // portfolioFilters.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   select(".filter-btn", true).forEach((btn) => {
  //     btn.classList.remove("my-btn-primary");
  //   });
  //   event.target.classList.add("my-btn-primary");
  //   iso.arrange({ filter: event.target.getAttribute("data-filter") });
  // });

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
