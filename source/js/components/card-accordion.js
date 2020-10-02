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
