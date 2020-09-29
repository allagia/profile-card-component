'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var searchToggle = header.querySelector('.page-header__search-toggle');
  var searchForm = header.querySelector('.page-header__search-form');
  var overlay = header.querySelector('.page-header__overlay');

  searchForm.classList.remove('page-header__search-form--open');
  searchToggle.classList.remove('page-header__search-toggle--close');

  searchToggle.addEventListener('click', function () {
    searchForm.classList.add('page-header__search-form--open');
    searchToggle.classList.add('page-header__search-toggle--close');
    overlay.classList.add('page-header__overlay--show');
  });

  searchForm.addEventListener('submit', function () {
    searchForm.classList.remove('page-header__search-form--open');
    searchToggle.classList.remove('page-header__search-toggle--close');
  });

  var closeSearchForm = function () {
    searchForm.classList.remove('page-header__search-form--open');
    searchToggle.classList.remove('page-header__search-toggle--close');
    overlay.classList.remove('page-header__overlay--show');
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSearchForm();
    }
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
      if (overlay.classList.contains('page-header__overlay--show')) {
        searchForm.classList.remove('page-header__search-form--open');
        searchToggle.classList.remove('page-header__search-toggle--close');
        overlay.classList.remove('page-header__overlay--show');
        document.body.style.overflow = 'visible';
      }
    }
  });
})();
