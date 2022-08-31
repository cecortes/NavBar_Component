/* jQuery on Load */
$(function ($) {
  /* DOM elements */
  var $windows = $(window);
  var $body = $("body");

  /* Play initial animations on page load */
  $windows.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });
})(jQuery);
