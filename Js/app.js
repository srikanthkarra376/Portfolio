/* Shrink nav 
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
 */

/* links.forEach(function(link){
 link.addEventListener('click',function(lnk){
  if(lnk.classList.contains('active')){
    lnk.classList.remove('active');
  }else{
    lnk.classList.add('active');
  }
 });

}); */





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
