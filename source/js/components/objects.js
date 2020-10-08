'use strict';

(function () {
  var slider = document.querySelector('.objects__slider');

  if (slider) {
    var list = slider.querySelector('.objects__slider-list');
    var listElems = slider.querySelectorAll('.objects__slider-item');
    var prev = slider.querySelector('.objects__controls--prev');
    var next = slider.querySelector('.objects__controls--next');
    var sliderBtns = Array.from(slider.querySelectorAll('.objects__slider-button'));
    var descs = Array.from(slider.querySelectorAll('.objects__slider-desc'));
    var descsMobile = Array.from(slider.querySelectorAll('.objects__slider-desc-mobile'));

    prev.style.opacity = '0.25';

    var width = 364;
    var count = 1;
    var position = 0;
    var shownCount = 4;

    var onPrevClick = function () {
      next.style.opacity = '1';
      position += width * count;
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
      if (position > -width) {
        prev.style.opacity = '0.25';
      }
    };

    var onNextClick = function () {
      prev.style.opacity = '1';
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - shownCount));
      list.style.marginLeft = position + 'px';
      if (position > -width * 2) {
        next.style.opacity = '0.25';
      }
    };

    var removeActiveClass = function () {
      sliderBtns.forEach(function (sliderBtn) {
        sliderBtn.classList.remove('objects__slider-button--active');
      });
      descs.forEach(function (desc) {
        desc.classList.remove('objects__slider-desc--active');
      });
      descsMobile.forEach(function (descMobile) {
        descMobile.classList.remove('objects__slider-desc-mobile--active');
      });
    };

    prev.addEventListener('click', onPrevClick);
    next.addEventListener('click', onNextClick);

    sliderBtns.forEach(function (sliderBtn, i) {
      sliderBtn.addEventListener('click', function () {
        removeActiveClass();
        var screenWidth = document.body.clientWidth;
        if (screenWidth > 727) {
          sliderBtns[i].classList.add('objects__slider-button--active');
          descs[i].classList.add('objects__slider-desc--active');
        } else {
          descsMobile[i].classList.add('objects__slider-desc-mobile--active');
        }
      });
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        sliderBtns.forEach(function (sliderBtn) {
          sliderBtn.classList.remove('objects__slider-button--active');
        });
        descs.forEach(function (desc) {
          desc.classList.remove('objects__slider-desc--active');
        });
      }
    });
  }
})();
