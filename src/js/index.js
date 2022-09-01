/* On Load */
(function ($) {
  /* Dom Elements. */
  var $window = $(window);
  var $body = $("body");

  /* Breakpoints. */
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  /* Play initial animations on page load. */
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  /* Touch Mode */
  if (browser.mobile) $body.addClass("is-touch");

  /* Dropdowns. */
  $("#nav > ul").dropotron({
    alignment: "right",
    hideDelay: 350,
  });

  /* Title Bar. */
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  /* Panel. */
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);
