const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const overlay = document.querySelector('#overlay');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  overlay.classList.add('active');
}

function close() {
  mainMenu.style.top = '-100%';
  overlay.classList.remove('active');
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
mainMenu.addEventListener('click', close);