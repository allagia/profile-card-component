'use strict';

(function () {
  var table = document.querySelector('#table');
  table.addEventListener('scroll', function(e) {
    // $('thead').css("left", -e.target.scrollLeft); //fix the thead relative to the body scrolling
    $('thead th:nth-child(1)').css("left", e.target.scrollLeft); //fix the first cell of the header
    $('tbody td:nth-child(1)').css("left", e.target.scrollLeft); //fix the first column of tdbody
  });
})();
