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

$(document).ready(function () {
  // run test on initial page load
  $('.container-fluid h1').delay(1000).fadeTo(1000, 1);
  $('.container-fluid h2').delay(1200).fadeTo(1000, 1);
  $('.container-fluid p').delay(1500).fadeTo(1000, 1);
  $('.hidden').hide();
  $("ul li").hover(function () {
    $(this).find('.show').hide();
    $(this).find('.hidden').show();
  }, function () {
    $(this).find('.show').show();
    $(this).find('.hidden').hide();
  });
  
  
  /*$('ul li').hover(function () {
    var data_num = $(this).data('num');
    $('.hidden').each(function () {
      var iam = $(this);
      if (iam.attr('id') == data_num) {
        $('span.number').addClass('hidden');
      } else {
          $('span').removeClass('hidden');
      }
    });
  });*/





/*  $('.bullets li').hover(
    function () {
      var number = $('a href').id(this);
      alert(number);
    },
    function() {
        var $this = ('span').$(this); // caching $(this)
        $('span').text($this.data('defaultText'));
    }
);*/
  $('#features').delay(1600).fadeTo(2000, 1);
  $(icon[0]).click(function(){
    if($(pushDown).hasClass("push")){
      pushDown.className = "pushUp";
    }
    else{
      pushDown.className = "push";
    }
  })
  
 //capabilities jquery script start

  var slider = $('.slideshow');
  slider.slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 300,
      fade: true,
      adaptiveHeight: true,
      dots: false,
      arrows: false,
      pauseOnHover: true,
      pauseOnFocus: true
  }).slick("slickPause");
  
  setTimeout(function() {
      slider.slick("slickPlay");
  }, 3000);

  // pause slideshow on hover
  $('.box').hover(
      function() {
          slider.slick("slickPause");
      },
      function() {
          slider.slick("slickPlay");
      }
  );
  
  // change slide on nav hover
  $('.box li').hoverIntent(function(e) {
      e.preventDefault();
      var num = $(this).data('num');
      
      slider.slick('slickGoTo', parseInt(num));

      $('.box li.active').removeClass('active');
      $(this).addClass('active');
  });

  // change nav on slide change
  $('.slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.box li.active').removeClass('active');
      $('.box ul.desktop li[data-num=' + nextSlide + ']').addClass('active');
  });
  
//capabilities jquery script end

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
AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back'
})
AOS.refresh();