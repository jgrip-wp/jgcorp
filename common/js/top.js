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

var inviewBottom = 0;
var target;
$(window).scroll(function (){
  inviewBottom_p　= $(window).height()/1.2;
  inviewBottom = $(window).scrollTop() + $(window).height() - inviewBottom_p;

  $('.selecter').each(function(){
    var target = $(this).offset().top;
    if( target < inviewBottom){
      $(this).addClass('one');
      console.log($(this).offset().top+':'+inviewBottom);
    }
  })
  //サービスのリスト処理
  $('.service.one ul li').each(function(i) {
    $(this)
      .delay(250 * i)
      .css({'visibility':'visible'})
      .animate({opacity: 1, top:0}, 450,'jswing' );
  });


  $('.column.one ul li').each(function(i) {
    $(this)
      .delay(250 * i)
      .css({'visibility':'visible'})
      .animate({opacity: 1, top:0}, 450,'jswing' )
  });
});




$(document).ready(function($) {
    $(".modal_m").colorbox({
        inline: true,
        innerWidth: 756,
        innerHeight: 480,
        open: true,
    });
    $(".thumb_a").colorbox({
        iframe: true,
        innerWidth: 853,
        innerHeight: 480
    });
    $(".iframe").colorbox({
        iframe: true,
        width: "840px",
        height: "492px",
        open: true
    });
    $(".inline_a").colorbox({
        inline: true,
        maxWidth: "90%",
        maxHeight: "90%",
    });
    $(".callbacks").colorbox({
        onOpen: function() {
            alert('onOpen: colorbox is about to open');
        },
        onLoad: function() {
            alert('onLoad: colorbox has started to load the targeted content');
        },
        onComplete: function() {
            alert('onComplete: colorbox has displayed the loaded content');
        },
        onCleanup: function() {
            alert('onCleanup: colorbox has begun the close process');
        },
        onClosed: function() {
            alert('onClosed: colorbox has completely closed');
        }
    });


    $("#click").click(function() {
        $('#click').css({
            "background-color": "#f00",
            "color": "#fff",
            "cursor": "inherit"
        }).text("Open this window again and this message will still be here.");
        return false;
    });
});

$(function() {
    footerHeight = function() {
        var footerWrap = $('footer');
        //繝輔ャ繧ｿ繝ｼ縺ｮ鬮倥＆繧偵Μ繧ｻ繝�ヨ
        footerWrap.css({
            height: 'auto'
        });
        //繝輔ャ繧ｿ繝ｼ縺ｮ繝医ャ繝励°繧峨�霍晞屬
        var ft = footerWrap.offset();
        //繝輔ャ繧ｿ繝ｼ縺ｮ鬮倥＆
        var fh = footerWrap.height();
        //繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆�医せ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�鬆伜沺繧貞性繧��
        //var wh = window.innerHeight;
        //繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆�医せ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�鬆伜沺繧貞性縺ｾ縺ｪ縺�ｼ�
        var dh = document.documentElement.clientHeight;
        if (ft.top + fh < dh) {
            /* 繧ｦ繧､繝ｳ繝峨え縺ｮ鬮倥＆縺九ｉ縲√ヵ繝�ち繝ｼ縺ｮ繝医ャ繝励°繧峨�霍晞屬蛻�→縲√ヵ繝�ち繝ｼ縺ｮ繝懊�繝繝ｼ縺ｮ蛻�ｼ輔＞縺溷､縺後ヵ繝�ち繝ｼ縺ｮ鬮倥＆縺ｧ縺� */
            var fh = dh - ft.top - v2 + "px";
            footerWrap.css({
                height: fh
            });
        }
    };

    window.onload = function() {
        footerHeight();
    }

    $(window).resize(function() {
        footerHeight();
    });
});

// 繝励Ξ繝ｼ繝､繝ｼ縺ｮ繧ｵ繧､繧ｺ繧呈欠螳�
var ytWidth = 756;
var ytHeight = 425;

// 蝓九ａ霎ｼ繧youtube縺ｮID繧呈欠螳�
var ytData = [{
    id: 'KAJTd_RBYYo'
}];

ytBaseUrl = 'https://www.youtube.com/embed/';

// 繧ｵ繝�繝阪う繝ｫ逕ｻ蜒上�蝓九ａ霎ｼ縺ｿ貅門ｙ
var thumbInsert = '';

var ytPlayer;
// YouTube Player API繧定ｪｭ縺ｿ霎ｼ繧
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// API隱ｭ縺ｿ霎ｼ縺ｿ蠕後↓繝励Ξ繝ｼ繝､繝ｼ繧貞沂繧∬ｾｼ繧
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        height: ytHeight,
        width: ytWidth,
        videoId: ytData[0]['id']
    });
}
// 蜍慕判縺ｮ蜀咲函
function play(ytId, seekTime) {
    ytPlayer.loadVideoById(ytId, seekTime);
}

$(function() {
    // 繧ｵ繝�繝阪う繝ｫ逕ｻ蜒上�蝓九ａ霎ｼ縺ｿ
    $('#thumbnail').append(thumbInsert);

    $(document).on('click', '#thumbnail a', function() {
        ytId = $(this).attr('href').replace(ytBaseUrl, '');
        play(ytId, 0);
        return false;
    });
});
