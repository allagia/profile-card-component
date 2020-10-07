'use strict';

(function () {

  var technologySlider = document.querySelector('.technology__container');
  var breakpoint = window.matchMedia('(min-width:768px)');

  if (technologySlider) {

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
      mySwiper = new Swiper(technologySlider, {
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
  }
})();
