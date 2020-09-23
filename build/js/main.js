/** Порядок подключения JS-модулей */

'use strict';
(function () {
  var maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };


  [].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
    new IMask(input, maskOptions);
  });
})();

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


'use strict';

(function () {

  var swiper = new Swiper('.main-slider__container', {
    slidesPerView: 'auto',
    // spaceBetween: 140,
    centerInsufficientSlides: true,
    loop: 'true',
    autoHeight: 'true',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: '.main-slider__button-prev',
      prevEl: '.main-slider__button-next',
    },
    breakpoints: {
      1281: {
        spaceBetween: 140
      },

      768: {
        spaceBetween: 125
      },

      320: {
        spaceBetween: 40
      }
    }
  });
})();

