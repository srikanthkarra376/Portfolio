let links = document.querySelectorAll('#links .row li a');

/* links.forEach(function(link){
 link.addEventListener('click',function(lnk){
  if(lnk.classList.contains('active')){
    lnk.classList.remove('active');
  }else{
    lnk.classList.add('active');
  }
 });

}); */


links.forEach(function(link){
link.addEventListener('click',function(){
   if(link.classList=='active'){
       link.classList.remove('active')
   }else {
     link.classList.add('active')
   }
});

});