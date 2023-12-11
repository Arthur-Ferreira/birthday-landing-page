const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');
const navItems = document.querySelectorAll('a.mobile-menu__nav__items__item--link');

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle('open');
}

function closeMobileMenu() {
  mobileMenuElement.classList.remove('open');
}


mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);

navItems.forEach(element => {
  element.addEventListener('click', closeMobileMenu);
});
