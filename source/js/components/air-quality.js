'use strict';

(function () {
  // dropdown
  var dropdownBtns = document.querySelectorAll('.technique__btn');

  var onDropdownMenuClick = function (evt) {
    evt.preventDefault();
    var dropdownSection = evt.target.closest('.technique').querySelector('.technique__dropdown');

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

  // slider
  var clientWidth = document.body.clientWidth;
  var opportunitiesSlider;
  var slider = document.querySelector('.opportunities__slider');

  var sliderInit = function () {
    if (slider) {
      opportunitiesSlider = new Swiper(slider, {
        slidesPerView: 'auto',
        // loop: true,
        pagination: {
          el: '.opportunities__item-pagination',
          type: 'bullets',
          clickable: true
        },
      });
    }
  };

  var resizeHandlerSlider = function () {
    clientWidth = document.body.clientWidth;
    if (clientWidth < 1024) {
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
  window.addEventListener('load', resizeHandlerSlider);
})();
