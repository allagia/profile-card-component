'use strict';

(function () {
  var table = document.querySelector('#div-table');
  var firstColumnHead = table.querySelector('thead th:nth-child(1)');
  var firstColumns = table.querySelectorAll('tbody td:nth-child(1)');

  table.addEventListener('scroll', function (e) {

    firstColumnHead.style.left = -e.target.scrollLeft + 'px';
    firstColumnHead.style.left = e.target.scrollLeft + 'px';
    firstColumns.forEach(function (el) {
      el.style.left = e.target.scrollLeft + 'px';
    });
  });
})();
