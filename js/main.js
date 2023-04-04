const navbar = document.getElementById("navbar");
const selectClass = (className) => [
  ...document.getElementsByClassName(className),
];

const navLinks = selectClass("nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log("asggsdgdeg");
    e.preventDefault();
    const sectionID = link.getAttribute("href").replace("#", "");
    window.scrollTo({
      top: document.getElementById(sectionID).offsetTop - navbar.offsetHeight,
      behavior: "smooth",
    });
  });
});
