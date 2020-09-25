'use strict';


(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var popups = document.querySelectorAll('.tab__link--modal');
  var button1 = document.querySelector('.tab__link--popup1');
  var button2 = document.querySelector('.tab__link--popup2');
  var popup1 = document.querySelector('.modal--calc');
  var popup2 = document.querySelector('.modal--inst');
  var body = document.querySelector('body');
  var closePopups = document.querySelectorAll('.modal__close-btn');
  var overlay = document.querySelector('.overlay');

  button1.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup1.classList.add('popup--opened');
    body.classList.add('body--under-popup');
  });


  button2.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup2.classList.add('popup--opened');
    body.classList.add('body--under-popup');
  });

  // var closeModal = function () {
  //   popups.forEach(function (el) {
  //     el.classList.remove('popup--opened');
  //   });
  //   return;
  // };

  var closePopup = function () {
    popup1.classList.remove('popup--opened');
    popup2.classList.remove('popup--opened');
    body.classList.remove('body--under-popup');
  };


  closePopups.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });
  });

  closePopups.forEach(function (element) {
    element.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    });
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closePopup();
    }
  });

  overlay.addEventListener('click', function (evt) {
    evt.stopPropagation(); //отмена закрывать окно при клике по модалке
    closePopup();
  });

})();
