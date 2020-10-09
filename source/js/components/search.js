'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var searchToggle = header.querySelector('.page-header__search-toggle');
  var searchBlock = header.querySelector('.page-header__search');

  searchBlock.classList.remove('page-header__search-form--opened');

  searchToggle.addEventListener('click', function () {
    searchBlock.classList.add('page-header__search--opened');
  });

  var closeSearch = function () {
    searchBlock.classList.remove('page-header__search--opened');
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

  document.addEventListener('mouseup', function (evt) {
    var target = evt.target;
    if (target.classList.contains('page-header__search-input')) {
      return;
    } else {
      closeSearch();
    }
  });
})();
