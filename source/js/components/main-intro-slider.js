'use strict';

(function () {

  var swiper1 = new Swiper('.main-slider1', {
    slidesPerView: 1,
    centerInsufficientSlides: true,
    loop: true,
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
      nextEl: '.main-sliders__button-prev1',
      prevEl: '.main-sliders__button-next1',
    },
    thumbs: {
      swiper: swiper2,
    }
  });

  var swiper2 = new Swiper('.main-slider2', {
    slidesPerView: 1,
    centerInsufficientSlides: true,
    loop: true,
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
    }
  });


})();
