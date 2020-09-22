'use strict';

(function () {

  var swiper = new Swiper('.main-slider__container', {
    slidesPerView: 'auto',
    spaceBetween: 145,
    slidesOffsetBefore: 145,
    centerInsufficientSlides: true,
    loop: 'true',

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
    }
  });
})();
