'use strict';

(function () {
  var TABLET__1200 = window.utils.BREAKPOINT_TABLET__1200;
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__nav-toggle');
  var navWrap = header.querySelector('.page-header__nav-wrap');

  navWrap.classList.remove('page-header__nav-wrap--nojs');

  var closeMenu = navToggle.addEventListener('click', function () {
    if (navWrap.classList.contains('page-header__nav-wrap--closed')) {
      navWrap.classList.remove('page-header__nav-wrap--closed');
      navWrap.classList.add('page-header__nav-wrap--opened');
    } else {
      navWrap.classList.add('page-header__nav-wrap--closed');
      navWrap.classList.remove('page-header__nav-wrap--opened');
    }
  });

  window.matchMedia(TABLET__1200).addListener(closeMenu);
})();
