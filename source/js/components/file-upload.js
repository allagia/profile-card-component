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
