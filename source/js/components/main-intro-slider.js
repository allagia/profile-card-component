'use strict';

(function () {

  var parentSlider = document.querySelector('.main-slider1');
  var nextSlide = document.querySelector('.main-slider2');

  if (nextSlide && parentSlider) {
    var nextSlideItems = nextSlide.querySelectorAll('.swiper-slide');

    var swiper1 = new Swiper(parentSlider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.main-sliders__pagination1',
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
        prevEl: '.main-sliders__button-prev1',
        nextEl: '.main-sliders__button-next1',
      },
      on: {
        slideChange: function () {
          nextSlideItems.forEach(function (el) {
            el.classList.remove('active');
          });
          var index = this.realIndex + 1;
          if (nextSlideItems[index]) {
            nextSlideItems[index].classList.add('active');
          } else {
            nextSlideItems[0].classList.add('active');
          }
        },
      },
    });
  }
})();
