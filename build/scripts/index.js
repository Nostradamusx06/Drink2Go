// source/scripts/index.js
var mobileMenu = () => {
  const navMain = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".main-nav__toggle");
  navMain.classList.remove("main-nav--nojs");
  navToggle.addEventListener("click", () => {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
};
mobileMenu();
var swiper = new Swiper(".swiper", {
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=index.js.map
