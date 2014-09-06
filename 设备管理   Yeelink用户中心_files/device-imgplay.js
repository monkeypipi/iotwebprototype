$(function(){
       $('.dev-img').bannerSlide();
    });
    //设备焦点图插件
    (function($){
        $.fn.bannerSlide = function(){
            var This = $(this);
            var len = This.find('.img-wrap li').length;
            var iNow =0;
            var timer = null;
  
            for(var i = 0;i<len;i++)
            {
                This.find('.num-wrap').append("<li><a href='javascript:;'></a></li>")
            }
  
            //init
            This.find('.img-wrap li').eq(0).fadeIn("fast");
            This.find('.num-wrap li').eq(0).find('a').addClass('active');
  
            This.find('.num-wrap li').click(function(){
                iNow = $(this).index();
                if (len >= 2) {
                    fnFadeMove ();
                }
            });
  
            timer = setInterval(function(){
                iNow++;
                if(iNow>len-1)
                {
                    iNow = 0;
                }
                if (len >= 2) {
                    fnFadeMove();
                }
            },5000);

            This.find('.num-wrap').hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(function(){
                    iNow++;
                    if(iNow>len-1)
                    {
                        iNow = 0;
                    }
                    if ( len>=2 ) {
                        fnFadeMove();
                    }
                },5000);
            })
            function fnFadeMove (){
                This.find('.num-wrap li').find('a').removeClass('active')
                This.find('.num-wrap li').eq(iNow).find('a').addClass('active');
                This.find('.img-wrap li').stop(true,true).fadeOut();
                This.find('.img-wrap li').eq(iNow).stop(true,true).fadeIn();
            };
        };
    })(jQuery);