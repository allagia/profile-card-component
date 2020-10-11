'use strict';

(function () {
  var slider = document.querySelector('.objects__slider');

  if (slider) {
    var list = slider.querySelector('.objects__slider-list');
    var listElems = slider.querySelectorAll('.objects__slider-item');
    var prevBtn = slider.querySelector('.objects__controls--prev');
    var nextBtn = slider.querySelector('.objects__controls--next');
    var sliderBtns = Array.from(slider.querySelectorAll('.objects__slider-button'));
    var descs = Array.from(slider.querySelectorAll('.objects__slider-desc'));
    var descsMobile = Array.from(slider.querySelectorAll('.objects__slider-desc-mobile'));
    var screenWidth = document.body.clientWidth;
    var tabletWidth = 1279;

    prevBtn.style.opacity = '0.25';

    var count = 1;
    var position = 0;
    var shownCount = 4;

    var findWidth = function () {
      var width = 0;
      if (screenWidth > 1600) {
        width = 364;
      } else {
        width = 307;
      }
      return width;
    };

    var onPrevBtnClick = function () {
      var width = findWidth();
      nextBtn.style.opacity = '1';
      position += width * count;
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
      if (position > -width) {
        prevBtn.style.opacity = '0.25';
      }
    };

    var onNextBtnClick = function () {
      var width = findWidth();
      prevBtn.style.opacity = '1';
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - shownCount));
      list.style.marginLeft = position + 'px';
      if (position > -width * shownCount) {
        nextBtn.style.opacity = '0.25';
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

    prevBtn.addEventListener('click', onPrevBtnClick);
    nextBtn.addEventListener('click', onNextBtnClick);

    sliderBtns.forEach(function (sliderBtn, i) {
      sliderBtn.addEventListener('click', function () {
        removeActiveClass();
        if (screenWidth > tabletWidth) {
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

    window.addEventListener('resize', function () {
      if (tabletWidth > screenWidth) {
        location.reload();
      }
    });
  }
})();
