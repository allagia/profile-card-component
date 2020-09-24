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
