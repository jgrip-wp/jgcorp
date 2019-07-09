jQuery(document).ready(function($){
  // set viewport
  spView = 'width=640';
  pcView = 'width=1200';

  if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
    $('head').prepend('<meta name="viewport" content="' + spView + ',user-scalable=n">');
  } else {
    $('head').prepend('<meta name="viewport" content="' + pcView + '">');
  }


  $(document).on('click','.menu_trigger',function(){
	  $('.menu_01').addClass('active');
    $('.menu_trigger').addClass('active');
	});
  $(document).on('click','.service_btn',function(){
	  $('.menu_02').addClass('active');
    $('.menu_02_02').removeClass('active');
	});
  $(document).on('click','.about_btn',function(){
	  $('.menu_02_02').addClass('active');
    $('.menu_02').removeClass('active');
	});
  $(document).on('click','.menu_trigger.active',function(){
    $('.menu_trigger').removeClass('active');
	  $('.menu_01').removeClass('active');
    $('.menu_02').removeClass('active');
	});
  $(document).on('click','.menu_01 .close',function(){
	  $('.menu_01').removeClass('active');
    $('.menu_02').removeClass('active');
    $('.menu_trigger').removeClass('active');
    $('.menu_02_02').removeClass('active');
	});
  $(document).on('click','.menu_02 .close',function(){
	  $('.menu_02').removeClass('active');
	});
  $(document).on('click','.sp .menu_01',function(){
	  $('.menu_01').removeClass('active');
    $('.menu_02').removeClass('active');
	});
  $(document).on('click','.menu_02 .close',function(){
	  $('.menu_02').removeClass('active');
	});
  $(document).on('click','.menu_02_02 .close',function(){
	  $('.menu_02_02').removeClass('active');
	});

  $(document).on('click','#contents_area',function(){
    $('.menu_02').removeClass('active');
	  $('.menu_02_02').removeClass('active');
    $('.menu_01').removeClass('active');
    $('.menu_trigger').removeClass('active');
	});



});

//共通パーツ
$(function(){
 $("#header_outer").load("/inc/header.html");
 $("#side_outer").load("/inc/side.html");
 $("#footer_outer").load("/inc/footer.html");
});


//title Effect
$(function(){
  $('.title_strip').each(function(){
    var $t = $(this),
        rows = $.trim($t.html()).split('<br>');
    $t.html('');
    $.each(rows, function(i, val){
      $('<span class="row"></span>').appendTo($t);
      var letters = $.trim(val).split('');
      $.each(letters, function(j, v){
        v = (v == ' ') ? '&nbsp;' : v;
        $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
      });
    });
  });

  $(window).scroll(function (){
    $('.one .title_strip').each(function(){
      for (i = 0; i < $('.title_strip span').length; i++) {
        (function(ind) {
          setTimeout(function(){
              $('.title_strip span').eq(ind).addClass('animate');
          }, ind * 50);
        })(i);
      }
    });
  });
});



