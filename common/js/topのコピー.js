//RSS
$(function(){
  $.ajax({
    url: "http://test-11.jgrip.co.jp/info/feed/",
    cache: false,
    dataType:"xml",
    success: function(xml){
      $(xml).find('item').each(function(){
        var title = $(this).find('title').text();
        var url = $(this).find('link').attr('href')
        $('<li></li>').html('<a href="'+url+'">'+title+'</a>').appendTo('ul#feed');
        });
    }
  });
});

$('#slider').bxSlider({
 auto: true,
 controls: false
});
$('#slider02').bxSlider({
  auto: true,
  pager: false,
  slideWidth: 250,
  touchEnabled: false
});

$(document).on('mousedown','#slider02 .bx-viewport a',function(){
  var $this = $(this),
      myHref = $this.attr('href'),
      myTarget = $this.attr('target');
  if(myTarget === '_blank'){
    window.open(myHref);
  }else{
    window.location.href = myHref;
  }
});


$(function(){

  //スクロール処理
  $(window).scroll(function (){

    $('.selecter').each(function(){
      var select = $(this);
      var imgPos = select.offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var scrollheight = imgPos - windowHeight;
      if (scroll > imgPos-windowHeight/5){
          select.addClass('one');
      }

      //サービスのリスト処理
      $('.selecter.one ul li').each(function(i) {
        $(this)
          .delay(250 * i)
          .css({'visibility':'visible'})
          .animate({opacity: 1, top:0}, 450,'jswing' );
      });


      $('.column.one ul li').each(function(i) {
        $(this)
          .delay(1000 * i)
          .css({'visibility':'visible'})
          .animate({opacity: 1, top:0}, 450,'jswing' )
          .addClass('aaa');
      });

    });


  });

});

