'use strict';

(function () {
  var TABLET__1200 = window.utils.BREAKPOINT_TABLET__1200;
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__nav-toggle');
  var navWrap = header.querySelector('.page-header__nav-wrap');

  navWrap.classList.remove('page-header__nav-wrap--nojs');
  navWrap.classList.remove('page-header__nav-wrap--opened');
  navWrap.classList.add('page-header__nav-wrap--closed');

  var closeMenu = navToggle.addEventListener('click', function () {
    if (navWrap.classList.contains('page-header__nav-wrap--closed')) {
      navWrap.classList.remove('page-header__nav-wrap--closed');
      navWrap.classList.add('page-header__nav-wrap--opened');
      document.body.style.overflow = 'hidden';
    } else {
      navWrap.classList.add('page-header__nav-wrap--closed');
      navWrap.classList.remove('page-header__nav-wrap--opened');
      document.body.style.overflow = 'visible';
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      navWrap.classList.add('page-header__nav-wrap--closed');
      navWrap.classList.remove('page-header__nav-wrap--opened');
      document.body.style.overflow = 'visible';
    }
  });

  window.matchMedia(TABLET__1200).addListener(closeMenu);
})();
