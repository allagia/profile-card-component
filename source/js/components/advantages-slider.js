'use strict';

(function () {

  var breakpoint = window.matchMedia('(min-width:992px)');

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
    var swiper = new Swiper('.advantages__wrap', {
      slidesPerView: 'auto',
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
