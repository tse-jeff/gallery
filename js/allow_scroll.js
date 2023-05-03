$(document).ready(function () {
  $(window).on('resize', function () {
    var screen_size = $(window).width();
    if (screen_size < 768) {
      $('body').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
      $('body').scrollTop(-$('nav').height()-$('header').height());
    }
  });
});
