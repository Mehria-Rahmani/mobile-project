const menubtn = document.querySelector('#menu');
function menubtnClicked() {
  document.querySelector('.menuexpand').classList.toggle('expand');
  document.querySelector('.menu').classList.toggle('expand');
  document.querySelector('.name').classList.toggle('expand');
  document.querySelector('.closebtn').classList.toggle('expand');
  document.querySelector('.toolbar').classList.toggle('height100');
  if (document.querySelector('.menu-desktop-container').style.overflow === 'hidden') {
    document.querySelector('.menu-desktop-container').style.overflow = 'auto';
  } else {
    document.querySelector('.menu-desktop-container').style.overflow = 'hidden';
  }
}
menubtn.addEventListener('click', menubtnClicked);
const closemenu = document.querySelector('.closebtn');
closemenu.addEventListener('click', menubtnClicked);
document.querySelectorAll('.expitem').forEach((item) => {
  item.addEventListener('click', menubtnClicked);
});
