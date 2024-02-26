const mobileMenu = () => {
  const mainNav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
  });
};

mobileMenu();
