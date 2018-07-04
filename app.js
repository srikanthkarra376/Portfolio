$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});

// var Icon = document.querySelector("div#icon");
// var uldiv = document.querySelector(".menu");
// Icon.addEventListener('click',function(e){
//    uldiv.
// }

$("div#icon").on("click",function(){
    $('.menu').toggle();
})