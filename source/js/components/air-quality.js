'use strict';

(function () {
  // dropdown
  var dropdownBtns = document.querySelectorAll('.technique__btn');

  var onDropdownMenuClick = function (evt) {
    evt.preventDefault();
    var dropdownSection = evt.target.closest('.technique').querySelector('.technique__details');

    if (dropdownSection) {
      if (parseInt(dropdownSection.style.maxHeight, 10)) {
        dropdownSection.style.maxHeight = 0 + 'px';
        if (evt.target.innerHTML === 'Свернуть') {
          evt.target.innerHTML = 'Развернуть';
        }
      } else {
        dropdownSection.style.maxHeight = dropdownSection.scrollHeight + 'px';
        if (evt.target.innerHTML === 'Развернуть') {
          evt.target.innerHTML = 'Свернуть';
        }
      }
      evt.target.classList.toggle('technique__btn--show');
    }
  };

  if (dropdownBtns) {
    dropdownBtns.forEach(function (btn) {
      btn.addEventListener('click', onDropdownMenuClick);
    });
  }

  var clientWidth = document.body.clientWidth;
  var opportunitiesSlider;

  var sliderInit = function () {
    opportunitiesSlider = new Swiper('.opportunities__slider', {
      slidesPerView: '1',
      // loop: true,
      pagination: {
        el: '.opportunities__item-pagination',
        type: 'bullets',
        clickable: true
      },

    });
  };

  var resizeHandlerSlider = function () {
    clientWidth = document.body.clientWidth;
    if (clientWidth < 768) {
      if (opportunitiesSlider) {
        opportunitiesSlider.destroy();
      }
      sliderInit();
    } else {
      if (opportunitiesSlider) {
        opportunitiesSlider.destroy();
      }
    }
  };

  window.addEventListener('resize', resizeHandlerSlider);
})();
