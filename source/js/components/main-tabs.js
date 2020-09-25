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


