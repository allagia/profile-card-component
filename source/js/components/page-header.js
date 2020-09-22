'use strict';

(function () {
  var BREAKPOINT_MOBILE = window.utils.BREAKPOINT_MOBILE;

  var header = document.querySelector('.page-header');
  var btnOpen = header.querySelector('.page-header__btn-open');
  var btnClose = header.querySelector('.page-header__btn-close');
  var menu = header.querySelector('.page-header__menu-wrapper');

  var closeMenu = function () {
    menu.classList.remove('page-header__menu-wrapper--open');
  };

  btnOpen.addEventListener('click', function () {
    menu.classList.add('page-header__menu-wrapper--open');
  });

  btnClose.addEventListener('click', function () {
    closeMenu();
  });

  window.matchMedia(BREAKPOINT_MOBILE).addListener(closeMenu);
})();

