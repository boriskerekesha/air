'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form__form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
