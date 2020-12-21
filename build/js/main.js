/** Порядок подключения JS-модулей */

'use strict';

(function () {
  window.utils = {
    BREAKPOINT_MOBILE: '(max-width: 767px)',
    BREAKPOINT_TABLET__1200: '(max-width: 1200px)',
    BREAKPOINT_TABLET: '(max-width: 1280px)',
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13
  };
})();

'use strict';

(function () {
  var header = document.querySelector('.page-header');

  if (header) {
    // var TABLET__1200 = window.utils.BREAKPOINT_TABLET__1200;
    var navToggle = header.querySelector('.page-header__nav-toggle');
    var navWrap = header.querySelector('.page-header__wrapper');
    var nav = header.querySelector('.page-header__nav');
    var btns = Array.from(header.querySelectorAll('.page-header__nav-link'));

    navWrap.classList.remove('page-header__wrapper--nojs');

    var openMenu = function () {
      if (navWrap.classList.contains('page-header__wrapper--closed')) {
        navWrap.classList.remove('page-header__wrapper--closed');
        navWrap.classList.add('page-header__wrapper--opened');

        document.body.style.overflow = 'hidden';
      } else {
        navWrap.classList.add('page-header__wrapper--closed');
        navWrap.classList.remove('page-header__wrapper--opened');
        document.body.style.overflow = 'visible';
      }
    };

    var removeActive = function () {
      nav.classList.remove('page-header__nav--active');
      btns.forEach(function (link) {
        link.classList.remove('page-header__nav-link--active');
      });
    };

    var showActiveHeader = function (target) {
      removeActive();
      nav.classList.add('page-header__nav--active');
      target.classList.add('page-header__nav-link--active');
    };

    var handleBtnClick = function (evt) {
      var target = evt.currentTarget;
      showActiveHeader(target);
    };

    navToggle.addEventListener('click', openMenu);

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        navWrap.classList.add('page-header__nav-wrap--closed');
        navWrap.classList.remove('page-header__nav-wrap--opened');
        document.body.style.overflow = 'visible';
      }
    });

    btns.forEach(function (btn) {
      btn.addEventListener('click', handleBtnClick);
    });

    //window.matchMedia(TABLET__1200).addListener(openMenu);
  }
})();

'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var searchToggle = header.querySelector('.page-header__search-toggle');
  var searchBlock = header.querySelector('.page-header__search');

  searchBlock.classList.remove('page-header__search-form--opened');

  searchToggle.addEventListener('click', function () {
    searchBlock.classList.add('page-header__search--opened');
  });

  var closeSearch = function () {
    searchBlock.classList.remove('page-header__search--opened');
  };

  searchBlock.addEventListener('submit', function () {
    closeSearch();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSearch();
    }
  });

  document.addEventListener('mouseup', function (evt) {
    var target = evt.target;
    if (target.classList.contains('page-header__search-input')) {
      return;
    } else {
      closeSearch();
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

  var fileUploads = document.querySelectorAll('input[type="file"]');

  fileUploads.forEach(function (el) {
    el.onchange = function () {
      var parent = el.closest('form');
      parent.querySelector('.modal__upload-success').style = 'display: block';
      parent.querySelector('.modal__attachment').style = 'display: none';
    };
  });

})();

'use strict';

(function () {

  var technologySlider = document.querySelector('.technology__container');
  var breakpoint = window.matchMedia('(min-width:768px)');

  if (technologySlider) {

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
      mySwiper = new Swiper(technologySlider, {
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
  }
})();

'use strict';

(function () {

  var parentSlider = document.querySelector('.main-slider1');
  var nextSlide = document.querySelector('.main-slider2');

  if (nextSlide && parentSlider) {
    var nextSlideItems = nextSlide.querySelectorAll('.swiper-slide');

    var swiper1 = new Swiper(parentSlider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.main-sliders__pagination1',
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
        prevEl: '.main-sliders__button-prev1',
        nextEl: '.main-sliders__button-next1',
      },
      on: {
        slideChange: function () {
          nextSlideItems.forEach(function (el) {
            el.classList.remove('active');
          });
          var index = this.realIndex + 1;
          if (nextSlideItems[index]) {
            nextSlideItems[index].classList.add('active');
          } else {
            nextSlideItems[0].classList.add('active');
          }
        },
      },
    });
  }
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

  var overlayMain = document.querySelector('.overlay--main');

  if (overlayMain) {
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
  }
})();

'use strict';

(function () {

  var pictureSlider = document.querySelector('.pictures');

  if (pictureSlider) {

    var swiper = new Swiper(pictureSlider, {
      slidesPerView: 'auto',
      // autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    });
  }

})();

'use strict';

(function () {

  var advantagesSlider = document.querySelector('.advantages__wrap');
  var breakpoint = window.matchMedia('(min-width:992px)');

  if (advantagesSlider) {

    var mySwiper;

    var breakpointChecker1 = function () {

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
      mySwiper = new Swiper(advantagesSlider, {
        slidesPerView: 'auto',
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      });
    };

    breakpoint.addListener(breakpointChecker1);


    breakpointChecker1();
  }

})();

'use strict';

(function () {
  var accordion = document.querySelector('.card-accordion');
  var acc = document.querySelectorAll('.card-accordion__item');


  if (accordion) {
    accordion.classList.remove('no-js');

    var openAccordion = function () {

      for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          this.classList.toggle('active');
          var panel = this.nextElementSibling;

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        });

      }

    };


    openAccordion();
  }


})();

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

'use strict';

(function () {
  var table = document.querySelector('#div-table');

  if (table) {
    var firstColumnHead = table.querySelector('thead th:nth-child(1)');
    var firstColumns = table.querySelectorAll('tbody td:nth-child(1)');

    table.addEventListener('scroll', function (e) {

      firstColumnHead.style.left = -e.target.scrollLeft + 'px';
      firstColumnHead.style.left = e.target.scrollLeft + 'px';
      firstColumns.forEach(function (el) {
        el.style.left = e.target.scrollLeft + 'px';
      });
    });
  }

})();

'use strict';

(function () {
  var overlayCard = document.querySelector('.overlay--card');

  if (overlayCard) {
    var popup = document.querySelector('.modal--calc');
    var body = document.querySelector('body');
    var button = document.querySelector('.basic-info__btn');

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
  }
})();

'use strict';

// (function () {

//   var gridViewScroll = null;
//   window.onload = function () {
//     gridViewScroll = new GridViewScroll({
//       elementID: 'myTable',
//       width: 700,
//       height: 350,
//       freezeColumn: true,
//       freezeFooter: false,
//       freezeColumnCssClass: 'GridViewScrollItemFreeze',
//       freezeFooterCssClass: 'GridViewScrollFooterFreeze',
//       freezeHeaderRowCount: 1,
//       freezeColumnCount: 2,
//       onscroll: function (scrollTop, scrollLeft) {
//         console.log(scrollTop + ' - ' + scrollLeft);
//       }
//     });
//     gridViewScroll.enhance();
//   };
//   // function getScrollPosition() {
//   //   var position = gridViewScroll.scrollPosition;
//   //   alert('scrollTop: ' + position.scrollTop + ', scrollLeft: ' + position.scrollLeft);
//   // }
//   // function setScrollPosition() {
//   //   var scrollPosition = {scrollTop: 50, scrollLeft: 50};

//   //   gridViewScroll.scrollPosition = scrollPosition;
//   // }


// })();

'use strict';

(function () {

  var specificationsSlider = document.querySelector('.pattern__container');
  var breakpoint = window.matchMedia('(min-width:768px)');

  if (specificationsSlider) {

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
      mySwiper = new Swiper(specificationsSlider, {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
  }
})();

// =require components/modal-types.js
