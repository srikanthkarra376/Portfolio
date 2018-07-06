$(window).scroll(function() {
  if ($(this).scrollTop() >= 100) {       
      $('#top').fadeIn(200);    
  } else {
      $('#top').fadeOut(200);   
  }
});
$('#top').click(function() {     
  $('body,html').animate({
      scrollTop : 0                       
  }, 1000);
});



//smooth scrolling 
 
    
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
     
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     
      if (target.length) {
       
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
       
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });

  //side nav bar finctions
  $('#first #logo i').on('click',function(){
    $("#menu #menu-ul").css('width','150').show().fadeIn(1000);
   });
   $('#menu #menu-ul li a.closebtn').click(function(){
     $("#menu #menu-ul").hide();
   });


  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {       
        $('img').fadeIn(3000);    
    } else {
        $('img').fadeOut(1000);   
    }
  });


  
  
    
