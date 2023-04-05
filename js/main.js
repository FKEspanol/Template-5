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
})();
