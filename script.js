function showMobileMenu() {
  const menuElement = document.querySelector('.js-menu');
  const menuBarElement = document.querySelector('.js-mobile-menubar');
  let clicked = false;
  
  menuElement.addEventListener('click', () => {
    if (!clicked) {
      menuBarElement.classList.add('show-menubar');
      clicked = true;
    } else {
      menuBarElement.classList.remove('show-menubar');
      clicked = false;
    }
  });
}
showMobileMenu();