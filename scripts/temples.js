// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    hamburger.textContent = '✖';
  } else {
    hamburger.textContent = '☰';
  }
});

// Footer dates
document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = 'Last Modified: ' + document.lastModified;