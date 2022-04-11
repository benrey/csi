// You can also use <link> for styles
// ..

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $('header').addClass('visiblebg');
    $('con').addClass('visiblebg')
  } else {
    $('header').removeClass('visiblebg');
    $('con').removeClass('visiblebg');
  }
});
$('.navbar-collapse').on('show.bs.collapse', function (e) {
  $('con').addClass('height');
})
$('.navbar-collapse').on('hide.bs.collapse', function (e) {
  $('con').removeClass('height');
})
$(document).ready(function() {
  // run test on initial page load
  checkSize();

  // run test on resize of the window
  $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
  if ($(".navbar-nav").css("flex-direction") == "row" ) {
    $('con').removeClass('height');
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
  }
}

$(document).ready(function () {
  $('.container-fluid h1').delay(1500).fadeTo(500, 1);
  $('.container-fluid h2').delay(1750).fadeTo(500, 1);
  $('.container-fluid p').delay(2500).fadeTo(500, 1);
  $('#features').delay(500).fadeTo(2000, 1);
});


var icon = document.getElementsByClassName("icon-bars");
var pushDown = document.getElementById("push");

$(document).ready(function(){
  $(icon[0]).click(function(){
    if($(pushDown).hasClass("push")){
      pushDown.className = "pushUp";
    }
    else{
      pushDown.className = "push";
    }
  })
});

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back'
})
