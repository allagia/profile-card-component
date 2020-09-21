'use strict';

var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

[].slice.call(document.querySelectorAll('input[type="tel"]')).forEach(function (input) {
  new IMask(input, maskOptions);
});
