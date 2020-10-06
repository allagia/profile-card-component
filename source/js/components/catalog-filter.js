
'use strict';

(function () {
  var formFilter = document.querySelector('.catalog__form-filter');

  if (formFilter) {
    var btns = Array.from(formFilter.querySelectorAll('.catalog__filter-toggle'));
    var wraps = Array.from(formFilter.querySelectorAll('.catalog__fieldset-wrap'));
    var size = 992;
    var checkboxes = Array.from(formFilter.querySelectorAll('input[type=checkbox]'));
    var formBtns = formFilter.querySelector('.catalog__form-btns');
    var resetBtn = formBtns.querySelector('.catalog__form-reset-btn');

    formBtns.classList.remove('catalog__form-btns--nojs');
    wraps.forEach(function (wrap) {
      wrap.classList.remove('catalog__fieldset-wrap--nojs');
    });

    var openList = function (el) {
      if (el.classList.contains('catalog__fieldset-wrap--closed')) {
        el.classList.remove('catalog__fieldset-wrap--closed');
      } else {
        el.classList.add('catalog__fieldset-wrap--closed');
      }
    };

    var showContent = function (el) {
      var target = el.closest('.catalog__fieldset-wrap');
      openList(target);
    };

    var handleBtnClick = function (evt) {
      showContent(evt.currentTarget);
    };

    var closeAccordion = function () {
      var screenWidth = document.body.clientWidth;
      if (screenWidth <= size) {
        wraps.forEach(function (wrap) {
          wrap.classList.add('catalog__fieldset-wrap--closed');
        });
      } else {
        wraps.forEach(function (wrap) {
          wrap.classList.remove('catalog__fieldset-wrap--closed');
        });
      }
    };

    var showBtns = function () {
      formBtns.classList.remove('catalog__form-btns--show');
      checkboxes.forEach(function (btn) {
        if (btn.checked) {
          formBtns.classList.add('catalog__form-btns--show');
        }
      });
    };

    checkboxes.forEach(function (btn) {
      btn.addEventListener('change', showBtns);
    });

    btns.forEach(function (btn) {
      btn.addEventListener('click', handleBtnClick);
    });

    resetBtn.addEventListener('click', function () {
      formBtns.classList.remove('catalog__form-btns--show');
    });

    window.addEventListener('resize', function () {
      closeAccordion();
    });

    window.addEventListener('load', function () {
      closeAccordion();
    });
  }
})();
