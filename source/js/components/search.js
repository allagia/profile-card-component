'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var searchToggle = header.querySelector('.page-header__search-toggle');
  var searchBlock = header.querySelector('.page-header__search');
  var overlay = header.querySelector('.page-header__overlay');

  searchBlock.classList.remove('page-header__search-form--opened');

  searchToggle.addEventListener('click', function () {
    searchBlock.classList.add('page-header__search--opened');
    overlay.classList.add('page-header__overlay--show');
    document.body.style.overflow = 'hidden';
  });

  var closeSearch = function () {
    overlay.classList.remove('page-header__overlay--show');
    searchBlock.classList.remove('page-header__search--opened');
    document.body.style.overflow = 'visible';
  };

  searchBlock.addEventListener('submit', function () {
    closeSearch();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSearch();
    }
  });

  overlay.addEventListener('click', function () {
    if (overlay.classList.contains('page-header__overlay--show')) {
      closeSearch();
    }
  });
})();
