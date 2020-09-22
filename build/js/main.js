/** Порядок подключения JS-модулей */

'use strict';

(function () {
  window.utils = {
    BREAKPOINT_MOBILE: '(max-width: 767px)',
    BREAKPOINT_TABLET: '(max-width: 1280px)',
  };
})();

'use strict';

(function () {
  var BREAKPOINT_MOBILE = window.utils.BREAKPOINT_MOBILE;

  var body = document.querySelector('body');
  var header = document.querySelector('.page-header');
  var btnOpen = header.querySelector('.page-header__btn-open');
  var btnClose = header.querySelector('.page-header__btn-close');
  var menu = header.querySelector('.page-header__menu-wrapper');

  var closeMenu = function () {
    menu.classList.remove('page-header__menu-wrapper--open');
    body.classList.remove('overflow-hidden');
  };

  btnOpen.addEventListener('click', function () {
    menu.classList.add('page-header__menu-wrapper--open');
    body.classList.add('overflow-hidden');
  });

  btnClose.addEventListener('click', function () {
    closeMenu();
  });

  window.matchMedia(BREAKPOINT_MOBILE).addListener(closeMenu);
})();


'use strict';

var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

[].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
  new IMask(input, maskOptions);
});

