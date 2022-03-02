$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('transparent');
    $('con').addClass('transparent')
  } else {
    $('nav').removeClass('transparent');
    $('con').removeClass('transparent');
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