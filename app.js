"use strict";

function myFunction() {
  var x = document.getElementById("#links");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}



let link= document.querySelector('#links .row li a');

link.addEventListener('click',function(e){
  e.preventDefault();
  if(link.classList == 'js'){
    link.classList.remove('js')
  }else{
    link.classList.add('js');
  }

});




//enabling smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//scroll top button

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300|| document.documentElement.scrollTop > 50) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

function gotoTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
//set time out to the scroll top

$('#myBtn').click(function(){
  setTimeout(function(){
      var id = $(this);
      $('html, body').animate({
          scrollTop:$(id).offset().top
      }, 'slow');
  }, 1200);
});