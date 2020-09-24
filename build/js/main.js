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
(function () {
  var maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  [].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
    new IMask(input, maskOptions);
  });
})();

'use strict';

(function () {

  document.querySelector('#file-upload').onchange = function () {
    document.querySelector('#file-name').textContent = this.files[0].name;
  };

})();

'use strict';

(function () {

  var breakpoint = window.matchMedia('(min-width:768px)');

  var mySwiper;

  var breakpointChecker = function () {

    if (breakpoint.matches === true) {

      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      // eslint-disable-next-line consistent-return
      return enableSwiper();

    }

  };

  var enableSwiper = function () {
    var swiper = new Swiper('.technology__container ', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      initialSlide: 1,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();

'use strict';

(function () {

  var swiper1 = new Swiper('.main-slider1', {
    slidesPerView: 1,
    // spaceBetween: 40,
    centerInsufficientSlides: true,
    loop: true,
    autoHeight: true,
    // freeMode: true,
    // loopedSlides: 2,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
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
      nextEl: '.main-slider1__button-prev',
      prevEl: '.main-slider1__button-next',
    },
    thumbs: {
      swiper: swiper2,
    },
    // breakpoints: {
    //   1281: {
    //     spaceBetween: 140
    //   },

    //   768: {
    //     spaceBetween: 125
    //   },

    //   320: {
    //     spaceBetween: 40
    //   }
    // }
  });

  var swiper2 = new Swiper('.main-slider2', {
    slidesPerView: 1,
    // spaceBetween: 40,
    centerInsufficientSlides: true,
    loop: true,
    // loopedSlides: 1,
    autoHeight: true,
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
      nextEl: '.main-slider2__button-prev',
      prevEl: '.main-slider2__button-next',
    },
    thumbs: {
      swiper: swiper1,
    },
    // breakpoints: {
    //   1281: {
    //     spaceBetween: 140
    //   },

    //   768: {
    //     spaceBetween: 125
    //   },

    //   320: {
    //     spaceBetween: 40
    //   }
    // }
  });


})();

