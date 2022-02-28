$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('transparent');
    $('con').addClass('transparent')
  } else {
    $('nav').removeClass('transparent');
    $('con').removeClass('transparent');
  }
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