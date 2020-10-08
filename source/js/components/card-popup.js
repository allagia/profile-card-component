'use strict';

(function () {
  var button = document.querySelector('.basic-info__btn');
  var popup = document.querySelector('.modal--calc');
  var body = document.querySelector('body');
  var closeBtn = document.querySelector('.modal__close-btn');
  var overlay = document.querySelector('.overlay--card');

  if (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--opened');
      body.classList.add('no-scroll');
    });
  }

  var closePopup = function () {
    popup.classList.remove('popup--opened');
    body.classList.remove('no-scroll');
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });


    closeBtn.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.ENTER_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    });
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ESC_KEYCODE) {
      evt.preventDefault();
      closePopup();
    }
  });

  if (overlay) {

    overlay.addEventListener('click', function () {
      closePopup();
    });
    for (var i = 0; i < overlay.childNodes.length; i++) {
      overlay.childNodes[i].addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  }

})();
