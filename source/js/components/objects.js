'use strict';

(function () {
  // slider
  var slider = document.querySelector('.objects__slider .swiper-container');
  if (slider) {
    var mySwiper = new Swiper(slider, {
      slidesPerView: 4,
      allowTouchMove: false,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // accordion
  var btnTab = document.querySelectorAll('.js-tab-btn');
  var btnAccord = document.querySelectorAll('.js-accord-btn');
  var allBlocks = document.querySelectorAll('.object-block');

  if (!allBlocks) {
    return;
  }

  for (var i = 0; i < btnTab.length; i++) {
    btnTab[i].addEventListener('click', function (e) {
      e.preventDefault();
      openAccordion(this, btnTab);
    });
  }


  for (var j = 0; j < btnAccord.length; j++) {
    btnAccord[j].addEventListener('click', function (e) {
      e.preventDefault();
      openAccordion(this, btnAccord);
    });
  }

  function openAccordion(element, btnArray) {
    for (var z = 0; z < btnArray.length; z++) {
      btnArray[z].classList.remove('active');
    }
    element.classList.add('active');

    for (var y = 0; y < allBlocks.length; y++) {
      allBlocks[y].classList.remove('active');
      allBlocks[y].style.maxHeight = null;
    }

    var panel = document.querySelector('#' + element.getAttribute('href'));
    panel.classList.add('active');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

})();
