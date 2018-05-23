
//------ Animations using j-query on index page-----

$('#welcome').addClass('animated bounceInLeft');
$('#welcome').one('webkitAnimationEnd', function(){
  $('#welcome').removeClass('animated bounceInLeft');
});
 //----Adding animation effect using the for the header-----

$('.intro').addClass('animated bounceInRight')
$('.intro').one('webkitAnimationEnd', function(){
 $('.intro').removeClass('animated bounceInRight');
});
$('button').addClass('animated fadeIn');


//-----button animations---

$('button').mouseover(function(){
  $('button').removeClass('animated fadeIn');
  $('button').mouseout(function(){
      $('button').addClass('animated fadeIn');
  });
  });

$('button').one('webkitAnimationEnd', function(){
   $('button').removeClass('animated fadeIn');
});



