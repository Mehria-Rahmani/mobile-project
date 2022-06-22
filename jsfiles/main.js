const mobileMenu = document.querySelector('.mobile-container');
const navMenu = document.querySelector('.nav-container');
const menuBar = document.querySelector('.menu_bar');
const menuClose = document.querySelector('.menu-close');
const about = document.querySelectorAll('.mobile-navlink');
menuBar.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  navMenu.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navMenu.style.display = 'flex';
});

about.forEach((n) => {
  n.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navMenu.style.display = 'flex';
  });
});
