$(function(){

  //スクロール処理
  $(window).scroll(function (){

    $('.u_service_content').each(function(){
      var select = $(this);
      var imgPos = select.offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var scrollheight = imgPos - windowHeight;
      if (scroll > imgPos - scroll){
          select.addClass('one');
      }

      $('.u_service_content.one').each(function(i) {
        $(this)
          .delay(250 * i)
          .css({'visibility':'visible'})
          .animate({opacity: 1, top:0}, 450,'jswing' );
      });

    });


  });

});