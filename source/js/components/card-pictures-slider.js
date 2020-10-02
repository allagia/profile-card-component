'use strict';

(function () {

  var swiper = new Swiper('.pictures__slider', {
    slidesPerView: 1,
    // autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

  });

})();
