$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('transparent');
  } else {
    $('nav').removeClass('transparent');
  }
});
