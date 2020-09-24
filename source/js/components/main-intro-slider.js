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
      nextEl: '.main-sliders__button-prev1',
      prevEl: '.main-sliders__button-next1',
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
      nextEl: '.main-sliders__button-prev2',
      prevEl: '.main-sliders__button-next2',
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
