$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

if ('ontouchstart' in window) { // detect touch
  document.documentElement.className = document.documentElement.className +
    'touch';
}
if (!$('html')
  .hasClass('touch')) {

  // background fix
  $('.parallax')
    .css('background-attachment', 'fixed');
}

// function to fix vertical when not overflow if .fullscreen content changes
function fullscreenFix() {
  var h = $('body')
    .height();

  // set .fullscreen height
  $('.content-b')
    .each(function (i) {
      if ($(this)
        .innerHeight() <= h) {
        $(this)
          .closest('.fullscreen')
          .addClass('not-overflow');
      }
    });
}
