var inviewBottom = 0;
var target;
$(window).scroll(function (){
  inviewBottom_p　= $(window).height()/1.2;
  inviewBottom = $(window).scrollTop() + $(window).height() - inviewBottom_p;

  $('.of_lis').each(function(){
    var target = $(this).offset().top;
    if( target < inviewBottom){
      $(this).addClass('one');
    }
  })
});

$(function(){
  $('.leadarea').addClass('one');
});