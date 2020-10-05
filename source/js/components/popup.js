'use strict';


(function () {

  // var popups = document.querySelectorAll('.tab__link--modal');
  var button1 = document.querySelector('.tab__link--popup1');
  var button2 = document.querySelector('.tab__link--popup2');
  var popup1 = document.querySelector('.modal--calc');
  var popup2 = document.querySelector('.modal--inst');
  var body = document.querySelector('body');
  var closePopups = document.querySelectorAll('.modal__close-btn');
  var overlay = document.querySelector('.overlay--main');

  if (button1) {

    button1.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup1.classList.add('popup--opened');
      body.classList.add('no-scroll');
    });
  }

  if (button2) {

    button2.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup2.classList.add('popup--opened');
      body.classList.add('no-scroll');
    });
  }

  // var closeModal = function () {
  //   popups.forEach(function (el) {
  //     el.classList.remove('popup--opened');
  //   });
  //   return;
  // };

  var closePopup = function () {
    popup1.classList.remove('popup--opened');
    popup2.classList.remove('popup--opened');
    body.classList.remove('no-scroll');
  };


  closePopups.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });
  });

  closePopups.forEach(function (element) {
    element.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.ENTER_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    });
  });

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
