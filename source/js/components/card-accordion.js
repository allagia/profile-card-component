'use strict';

(function () {
  var accordion = document.querySelector('.card-accordion');
  var acc = document.querySelectorAll('.card-accordion__item');
  // var bottomPadding = 36;

  if (accordion) {
    accordion.classList.remove('no-js');

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
  }


  // var accordion = document.querySelector('.accordion');

  // if (accordion) {
  //   accordion.classList.add('accordion--js');

  //   var titles = accordion.querySelectorAll('.accordion__tab-title');

  //   var onTitleClick = function (evt) {
  //     var rtime;
  //     var timeout = false;
  //     var delta = 100;

  //     window.addEventListener('resize', (function () {
  //       rtime = new Date();
  //       if (timeout === false) {
  //         timeout = true;
  //         setTimeout(resizeend, delta);
  //       }
  //     }), false);

  //     function resizeend() {
  //       if (new Date() - rtime < delta) {
  //         setTimeout(resizeend, delta);
  //       } else {
  //         timeout = false;
  //         var tabContent = evt.target.parentElement.querySelector('.accordion__tab-content');
  //         var tabContentHeight = tabContent.querySelector('p').scrollHeight + 'px';
  //         tabContent.style.height = (tabContent.offsetHeight === 0) ? 0 : tabContentHeight;
  //       }
  //     }

  //     var tabContent = evt.target.parentElement.querySelector('.accordion__tab-content');
  //     var tabContentHeight = tabContent.querySelector('p').scrollHeight + 'px';

  //     evt.target.parentElement.classList.toggle('accordion__tab--opened');
  //     tabContent.style.height = (tabContent.offsetHeight === 0) ? tabContentHeight : 0;
  //   };

  //   var onDocumentKeyDown = function (evt) {
  //     if (evt.keyCode === window.constant.KeyCode.ENTER && evt.target.classList.contains('accordion__tab-title')) {
  //       evt.preventDefault();
  //       onTitleClick(evt);
  //     }
  //   };
  // }
})();
