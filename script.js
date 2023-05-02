const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
    nav.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
    nav.classList.remove('sticky');
  }
});
