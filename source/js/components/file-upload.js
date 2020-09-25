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
