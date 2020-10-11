'use strict';

(function () {
  var header = document.querySelector('.page-header');

  if (header) {
    // var TABLET__1200 = window.utils.BREAKPOINT_TABLET__1200;
    var navToggle = header.querySelector('.page-header__nav-toggle');
    var navWrap = header.querySelector('.page-header__wrapper');
    var nav = header.querySelector('.page-header__nav');
    var btns = Array.from(header.querySelectorAll('.page-header__nav-link'));

    navWrap.classList.remove('page-header__wrapper--nojs');

    var openMenu = function () {
      if (navWrap.classList.contains('page-header__wrapper--closed')) {
        navWrap.classList.remove('page-header__wrapper--closed');
        navWrap.classList.add('page-header__wrapper--opened');

        document.body.style.overflow = 'hidden';
      } else {
        navWrap.classList.add('page-header__wrapper--closed');
        navWrap.classList.remove('page-header__wrapper--opened');
        document.body.style.overflow = 'visible';
      }
    };

    var removeActive = function () {
      nav.classList.remove('page-header__nav--active');
      btns.forEach(function (link) {
        link.classList.remove('page-header__nav-link--active');
      });
    };

    var showActiveHeader = function (target) {
      removeActive();
      nav.classList.add('page-header__nav--active');
      target.classList.add('page-header__nav-link--active');
    };

    var handleBtnClick = function (evt) {
      var target = evt.currentTarget;
      showActiveHeader(target);
    };

    navToggle.addEventListener('click', openMenu);

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        navWrap.classList.add('page-header__nav-wrap--closed');
        navWrap.classList.remove('page-header__nav-wrap--opened');
        document.body.style.overflow = 'visible';
      }
    });

    btns.forEach(function (btn) {
      btn.addEventListener('click', handleBtnClick);
    });

    //window.matchMedia(TABLET__1200).addListener(openMenu);
  }
})();
