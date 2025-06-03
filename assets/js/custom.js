function goToTop(){
    jQuery(function ($) {
       'use strict';
        $('.scroll-to-top').on('click', function() {
      $("html, body").animate({ scrollTop: "0" },  50);
  });
      });
}