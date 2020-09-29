/** Порядок подключения JS-модулей */

'use strict';

(function () {
  window.utils = {
    BREAKPOINT_MOBILE: '(max-width: 767px)',
    BREAKPOINT_TABLET__1200: '(max-width: 1200px)',
    BREAKPOINT_TABLET: '(max-width: 1280px)',
  };
})();

'use strict';

(function () {
  var TABLET__1200 = window.utils.BREAKPOINT_TABLET__1200;
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__nav-toggle');
  var navWrap = header.querySelector('.page-header__nav-wrap');

  navWrap.classList.remove('page-header__nav-wrap--nojs');

  var closeMenu = navToggle.addEventListener('click', function () {
    if (navWrap.classList.contains('page-header__nav-wrap--closed')) {
      navWrap.classList.remove('page-header__nav-wrap--closed');
      navWrap.classList.add('page-header__nav-wrap--opened');
    } else {
      navWrap.classList.add('page-header__nav-wrap--closed');
      navWrap.classList.remove('page-header__nav-wrap--opened');
    }
  });

  window.matchMedia(TABLET__1200).addListener(closeMenu);
})();

// =require components/page-header-navigation.js
'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var searchToggle = header.querySelector('.page-header__search-toggle');
  var searchForm = header.querySelector('.page-header__search-form');
  var overlay = header.querySelector('.page-header__overlay');

  searchForm.classList.remove('page-header__search-form--open');
  searchToggle.classList.remove('page-header__search-toggle--close');

  searchToggle.addEventListener('click', function () {
    searchForm.classList.add('page-header__search-form--open');
    searchToggle.classList.add('page-header__search-toggle--close');
    overlay.classList.add('page-header__overlay--show');
  });

  searchForm.addEventListener('submit', function () {
    searchForm.classList.remove('page-header__search-form--open');
    searchToggle.classList.remove('page-header__search-toggle--close');
  });

  var closeSearchForm = function () {
    searchForm.classList.remove('page-header__search-form--open');
    searchToggle.classList.remove('page-header__search-toggle--close');
    overlay.classList.remove('page-header__overlay--show');
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSearchForm();
    }
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
      if (overlay.classList.contains('page-header__overlay--show')) {
        searchForm.classList.remove('page-header__search-form--open');
        searchToggle.classList.remove('page-header__search-toggle--close');
        overlay.classList.remove('page-header__overlay--show');
        document.body.style.overflow = 'visible';
      }
    }
  });
})();

'use strict';
(function () {
  var maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };

  [].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
    new IMask(input, maskOptions);
  });
})();

'use strict';

(function () {

  var fileUploads = document.querySelectorAll('#file-upload');

  fileUploads.forEach(function (el) {
    el.onchange = function () {
      document.querySelector('.modal__upload-success').style = 'display: block';
      document.querySelector('.modal__attachment').style = 'display: none';
    };
  });

})();

'use strict';

(function () {

  var breakpoint = window.matchMedia('(min-width:768px)');

  var mySwiper;

  var breakpointChecker = function () {

    if (breakpoint.matches === true) {

      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      // eslint-disable-next-line consistent-return
      return enableSwiper();

    }

  };

  var enableSwiper = function () {
    var swiper = new Swiper('.technology__container ', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      initialSlide: 1,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();

'use strict';

(function () {

  var swiper1 = new Swiper('.main-slider1', {
    slidesPerView: 1,
    centerInsufficientSlides: true,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: '.main-sliders__button-prev1',
      prevEl: '.main-sliders__button-next1',
    },
    thumbs: {
      swiper: swiper2,
    }
  });

  var swiper2 = new Swiper('.main-slider2', {
    slidesPerView: 1,
    centerInsufficientSlides: true,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: '.main-sliders__button-prev2',
      prevEl: '.main-sliders__button-next2',
    },
    thumbs: {
      swiper: swiper1,
    }
  });


})();

'use strict';

(function () {

  function openTab(evt, tabName) {
    var i;
    var tabcontent;
    var tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tab__link');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';

    // document.getElementById('defaultOpen').click();
  }

  window.Tab = {
    openTab: openTab
  };
})();



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

