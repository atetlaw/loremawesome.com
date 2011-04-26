$(function(){
   function lorem_rotate1() {
     $('.awesome').removeClass('awesome-rotate2').addClass('awesome-rotate1');
     setTimeout(lorem_rotate2, 1000);
   }
   function lorem_rotate2() {
      $('.awesome').removeClass('awesome-rotate1').addClass('awesome-rotate2');
      setTimeout(lorem_rotate1, 1000);
   }
   $('#theme').bind('loadeddata',function(){
      this.play();
    }).bind('playing',function(){
      lorem_rotate1();
    });
    
   var audio = $('#theme').get(0);
   audio.load();  //this seems to be the best way to ensure the audio triggers the animation cross-browser. without this call, it's all up in the air. Firefox and IE9 are the most finiky
});


