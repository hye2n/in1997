//scroll시 header고정
var lnbTop = $('.lnb').offset().top;
var lnbH = $('.lnb').height();
var gnbH = $('.gnb').height();
var hdH = $('.header').height();
var snbH = $('.snb').height();
$(window).scroll(function(){
	var st = $(document).scrollTop();
    if(st > lnbTop){
        $('.header').css({
            'position':'fixed',
            'top':'-'+lnbTop+'px'
        });
        $('body').css('padding-top',hdH+'px');
    }else{
        $('.header').css({
            'position':'relative',
            'top':'0'
        });
        $('body').css('padding-top','0');
    }
});

$(".lnbTab>ul>li>a").hover(function(){
    if($(window).width()>1024){
        $('.tabWrap').show(); 
        $('.tabBg').show(); 
        $(this).parent().parent().parent().hover(function(){  
        },function(){  
            $(this).find('.tabWrap').hide();   
            $('.tabBg').hide();          
        });   
    }
})
if($(window).width()<=768){
    $('.lnbTab>ul>li').eq(0).find('>a').addClass('focus').next().show();
    $('.lnbTab>ul>li>a').on('click',function(){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
        return false;
    })
}
$('.tabWrap').hover(function(){
    if($(window).width()>768){
        $(this).prev().addClass('focus').parent().siblings().find('>a').removeClass('focus');
    }
    },function(){
        if($(window).width()>768){
            $(this).prev().removeClass('focus');
        }
})
//메뉴버튼
$('.ham').on('click',function(){
    if($(window).width()<=1024 && $(window).width()>768){
        if($('.ham').hasClass('close') == false){
            $(this).addClass('close').next().animate({
                'height':'330px'
            },500);
        }else{
            $(this).removeClass('close').next().animate({
                'height':'0'
            },500);
            }
        }
    return false;
})
var hh = $(window).height();
$('.ham').on('click',function(){
    if($(window).width()<=768){
        if($('.ham').hasClass('close') == false){
            $(this).addClass('close').next().animate({
                'height':hh+'px'     
            },500);
            $('body').css('height','100vh').css('overflow','hidden');
        }else{
            $(this).removeClass('close').next().animate({
                'height':'0'
            },500);
            $('body').css('height','auto').css('overflow','auto');
            }
        }
    return false;
})

$('.snbWrap>ul>li>a').on('click',function(){
    if($(window).width()>768){
        $(this).addClass('active').parent().siblings().find('>a').removeClass('active');
        $(this).next().show().parent().siblings().find('>ul').hide();
        $(this).parent().siblings().find('>ul').hide();
    }
    return false;
})

$('.snbWrap>ul>li>a').on('click',function(){
    if($(window).width()<=768){
        if($('.snbWrap>ul>li>a').hasClass('focus') == true){
            $(this).removeClass('focus').parent().siblings().show().parent().parent().css('height','auto').addClass('open');
        }else if($('.snbWrap').hasClass('open') == true){
            $(this).addClass('focus').addClass('active').parent().siblings().hide().find('>a').removeClass('active').parent().parent().parent().css('height','48px').removeClass('open');
        }
    }
    return false;
})