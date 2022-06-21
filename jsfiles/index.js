const menu = document.querySelector('.menu');

const mobileMenu = document.querySelector('.mob-menu');
menu.addEventListener('click', () => {
  mobileMenu.classList.remove('display-mob');
});

const closeIcon = document.querySelector('header .mobile-menu .close a');
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('display-mob');
});
