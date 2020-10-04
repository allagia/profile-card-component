'use strict';

(function () {
  // dropdown
  var dropdownBtns = document.querySelectorAll('.technique__btn');

  var onDropdownMenuClick = function (evt) {
    evt.preventDefault();
    var dropdownSection = evt.target.closest('.technique').querySelector('.technique__details');

    if (dropdownSection) {
      if (parseInt(dropdownSection.style.maxHeight, 10)) {
        dropdownSection.style.maxHeight = 0 + 'px';
        evt.target.innerHTML = 'РАЗВЕРНУТЬ';
      } else {
        dropdownSection.style.maxHeight = dropdownSection.scrollHeight + 'px';
        evt.target.innerHTML = 'СВЕРНУТЬ';
      }
      evt.target.classList.toggle('technique__btn--show');
    }
  };

  if (dropdownBtns) {
    dropdownBtns.forEach(function (btn) {
      btn.addEventListener('click', onDropdownMenuClick);
    });
  }

})();
