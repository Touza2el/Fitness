// Start Window On Scroll Event
const headerSection = document.querySelector('.header');
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (docScrollTop > 200) {
    headerSection.classList.add('fix-header');
  } else {
    headerSection.classList.remove('fix-header');
  }
};
// End Window On Scroll Event

// Start Header Section
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar ul');

hamburgerMenu.addEventListener('click', function () {
  navbar.classList.toggle('open');
});
// End Hedaer Section
