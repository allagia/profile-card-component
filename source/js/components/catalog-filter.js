
'use strict';

(function () {
  var formFilter = document.querySelector('.catalog__form-filter');

  if (formFilter) {
    var btns = formFilter.querySelectorAll('.catalog__filter-toggle');
    var wraps = formFilter.querySelectorAll('.catalog__fieldset-wrap');
    var checkboxes = formFilter.querySelectorAll('input[type=checkbox]');
    var formBtns = formFilter.querySelector('.catalog__form-btns');
    var resetBtn = formBtns.querySelector('.catalog__form-reset-btn');


    formBtns.classList.remove('catalog__form-btns--nojs');
    wraps.forEach(function (wrap) {
      wrap.classList.remove('catalog__fieldset-wrap--nojs');
    });


    var showContent = function (el) {
      var target = el.closest('.catalog__fieldset-wrap');

      if (target.classList.contains('catalog__fieldset-wrap--closed')) {
        target.classList.remove('catalog__fieldset-wrap--closed');
      } else {
        target.classList.add('catalog__fieldset-wrap--closed');
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
      btn.addEventListener('click', function (e) {
        showContent(e.currentTarget);
      });
    });

    resetBtn.addEventListener('click', function () {
      formBtns.classList.remove('catalog__form-btns--show');
    });


    var closeTabsOnMobile = function () {
      if (document.body.clientWidth < 768) {
        wraps.forEach(function (wrap) {
          wrap.classList.add('catalog__fieldset-wrap--closed');
        });
      } else {
        wraps.forEach(function (wrap) {
          wrap.classList.remove('catalog__fieldset-wrap--closed');
        });
      }
    };

    var vw;
    window.addEventListener('resize', function () {
      if (vw !== document.body.clientWidth) {
        vw = document.body.clientWidth;
        closeTabsOnMobile();
      }
    });

    window.addEventListener('DOMContentLoaded', function () {
      closeTabsOnMobile();
    });
  }

})();
