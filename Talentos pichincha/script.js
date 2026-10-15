const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    siteNav.dataset.open = String(!isOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      siteNav.dataset.open = 'false';
    }
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());