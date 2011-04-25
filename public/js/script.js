$(function(){
   function lorem_rotate1() {
     $('.awesome').removeClass('awesome-rotate2').addClass('awesome-rotate1');
     setTimeout(lorem_rotate2, 1000);
   }
   function lorem_rotate2() {
      $('.awesome').removeClass('awesome-rotate1').addClass('awesome-rotate2');
      setTimeout(lorem_rotate1, 1000);
   }
   $('#theme').bind('loadeddata',function(){console.log('loadeddata')});
   $('#theme').bind('playing',function(){console.log('playing')});
   
   $('#theme').bind('playing',function(){lorem_rotate1();});
});


