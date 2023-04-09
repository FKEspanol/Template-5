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
    } else {
      return document.querySelector(query);
    }
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

  /**
   *  loading animattion ripple effect before web page is loaded
   */
  window.addEventListener("load", function () {
    const loader = select(".ripple-container");
    loader.style.display = "none";
  });

  /**
   * dynamic navbar on scroll and scrollY position after load
   */

  const navbar = select("header#navbar");
  window.onscroll = (e) => {
    e.preventDefault();

    if (window.scrollY >= 100) {
      navbar.classList.remove("py-10");
      navbar.classList.add("py-5", "bg-secondary", "shadow-xl");
    } else {
      navbar.classList.remove("py-5", "bg-secondary", "shadow-xl");
      navbar.classList.add("py-10");
    }
  };

  window.onload = (e) => {
    e.preventDefault();
    if (window.scrollY >= 100) {
      navbar.classList.remove("py-10");
      navbar.classList.add("py-5", "bg-secondary", "shadow-xl");
    }
  };

  /**
   * scroll to a section with navbar height
   */

  on(
    "click",
    ".nav-link",
    function (e) {
      e.preventDefault();
      const sectionID = this.getAttribute("href").replace("#", "");
      // subtract 40px to the header navbar height when you scrolled down to a section from the very top of the page, because the navbar height is dependent on the default padding given in the header element which in this case is 40px more than when you scroll down to a section, you can remove the 40 px in the if statement below and click a link to a section from the very top of the page to test what's going on
      if (window.scrollY <= 100) {
        window.scrollTo({
          top:
            document.getElementById(sectionID).offsetTop -
            (navbar.offsetHeight - 40),
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top:
            document.getElementById(sectionID).offsetTop - navbar.offsetHeight,
          behavior: "smooth",
        });
      }
    },
    true
  );

  /**
   * apen and close sidebar on smaller screens
   */
  const sidebar = select("#sidebar");
  const sideNavModal = select("#sideNavModal");

  let isOpen = false;
  const showSidebar = () => {
    sideNavModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    isOpen = !isOpen;
  };
  on("click", "#menuBtn", (e) => {
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

  const closeSidebar = (targetElement, all = false) => {
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
  };

  // close sidebar when clicking on close button
  closeSidebar("#closeSidebarBtn");
  // close sidebar when clicking on modal
  closeSidebar("#sideNavModal");
  // close sidebar when clicking on navigation links
  closeSidebar(".sidebar-nav-link", true);
})();
