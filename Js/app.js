
// Animations using j-query on index page

$('#welcome').addClass('animated bounceInLeft');
$('#welcome').one('webkitAnimationEnd', function(){
  $('#welcome').removeClass('animated bounceInLeft');
});

$('.intro').addClass('animated bounceInRight')
$('.intro').one('webkitAnimationEnd', function(){
  $('.intro').removeClass('animated bounceInRight');
});
$('button').addClass('animated fadeIn');

$('button').mouseover(function(){
  $('button').removeClass('animated fadeIn');
  $('button').mouseout(function(){
      $('button').addClass('animated fadeIn');
  });
  });

$('button').one('webkitAnimationEnd', function(){
   $('button').removeClass('animated fadeIn');
});



