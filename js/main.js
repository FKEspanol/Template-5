(function () {
  "use strict";
  /**
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

  window.addEventListener("load", function () {
    const loader = select(".ripple-container");
    loader.style.display = "none";
  });

  /**
   * scroll to a section with navbar height
   */
  const navbar = select("header#navbar");
  on(
    "click",
    ".nav-link",
    function (e) {
      e.preventDefault();
      const sectionID = this.getAttribute("href").replace("#", "");
      window.scrollTo({
        top: document.getElementById(sectionID).offsetTop - navbar.offsetHeight,
        behavior: "smooth",
      });
    },
    true
  );

  const sidebar = select("#sidebar");
  const sideNavModal = select("#sideNavModal");

  let isOpen = false;
  const showSidebar = () => {
    sideNavModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    isOpen = !isOpen;
  };
  on("click", "#menuBtn", function (e) {
    e.preventDefault();
    if (!isOpen) {
      if (document.body.clientWidth >= 384) {
        showSidebar();
        sidebar.style.width = "384px";
      } else {
        showSidebar();
        sidebar.style.width = "100%";
      }
    }
  });

  function closeSidebar(targetElement, all = false) {
    on(
      "click",
      targetElement,
      function (e) {
        e.preventDefault();
        sideNavModal.classList.add("hidden");
        sidebar.style.width = "0px";
        document.body.classList.remove("overflow-hidden");
        isOpen = !isOpen;
      },
      all
    );
  }

  closeSidebar("#closeSidebarBtn");
  closeSidebar("#sideNavModal");
  closeSidebar(".sidebar-nav-link", true);
})();
