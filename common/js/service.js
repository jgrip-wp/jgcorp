var inviewBottom = 0;
var target;
$(window).scroll(function (){
  inviewBottom_p　= $(window).height()/1.1;
  inviewBottom = $(window).scrollTop() + $(window).height() - inviewBottom_p;

  $('.u_service_content').each(function(){
    var target = $(this).offset().top;
    if( target < inviewBottom){
      $(this).addClass('one');
    }
  })
});

$(function(){
      $('#loopslider').each(function(){
        var loopsliderWidth = $(this).width();
        var loopsliderHeight = $(this).height();
        $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

        var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
        var listCount = $('#loopslider_wrap').children('ul').children('li').length;

        var loopWidth = 1910;

        $('#loopslider_wrap').css({
            top: '0',
            left: '0',
            width: ((loopWidth) * 3),
            height: (loopsliderHeight),
            overflow: 'hidden',
            position: 'absolute'
        });

        $('#loopslider_wrap ul').css({
            width: (loopWidth)
        });
        loopsliderPosition();

        function loopsliderPosition(){
            $('#loopslider_wrap').css({left:'0'});
            $('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},25000,'linear');
            setTimeout(function(){
                loopsliderPosition();
            },25000);
        };

        $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
    });
    });