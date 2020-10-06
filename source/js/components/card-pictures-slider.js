'use strict';

(function () {

  var pictureSlider = document.querySelector('.pictures');

  if (pictureSlider) {

    var swiper = new Swiper(pictureSlider, {
      slidesPerView: 'auto',
      // autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    });
  }

})();
