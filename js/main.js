$(document).ready(function() {
  $('.container').on('click', function() {
  });
})
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
$('body').animateCss('bounce');
// $('.container').animateCss('zoomIn');
$('.intro-text img').animateCss('rubberBand');
$('.skills').animateCss('lightSpeedIn');
