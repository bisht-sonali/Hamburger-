// Toggle menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Toggle submenu
document.querySelectorAll('.has-submenu > a').forEach(menuLink => {
  menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = menuLink.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});