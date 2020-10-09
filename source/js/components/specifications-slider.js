'use strict';

(function () {

  var specificationsSlider = document.querySelector('.pattern__container');
  var breakpoint = window.matchMedia('(min-width:768px)');

  if (specificationsSlider) {

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
      mySwiper = new Swiper(specificationsSlider, {
        slidesPerView: 'auto',
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
