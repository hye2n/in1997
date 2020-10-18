//scroll시 header고정
var hdTop = $('.header').offset().top;
var lnbH = $('.lnb').height();
var gnbH = $('.gnb').height();
var hdH = $('.header').height();
var snbH = $('.snb').height();
$(window).scroll(function(){
    var st = $(document).scrollTop();
	if($(window).width()<=1024){
		if(st > hdTop){
			$('.header').css({
				'position':'fixed',
				'top':'0'
            });
			$('body').css('padding-top',hdH+'px');
		}else{
			$('.header').css({
				'position':'relative',
				'top':'0'
            });
			$('body').css('padding-top','0');
		}
	}
});

$(".lnbWrap>ul>li>a").hover(function(){
    if($(window).width()>1024){
        $(this).next().show().parent().siblings().find('>div').hide();     
        $(this).parent().parent().parent().hover(function(){  
        },function(){  
            $(this).find('.lnbTab').hide();           
        }); 
    }  
});

$(".lnbWrap>ul>li>a").on('click',function(){
    if($(window).width()<=1024 && $(window).width()>768){
        $(this).next().toggle().parent().siblings().find('>div').hide();
    }
    return false;
})

$('.allM>a').on('click',function(){
    if($(window).width()<=768){
        if($('.allM>a').hasClass('open') == false){
            $(this).addClass('open');
            $('.lnb').addClass('on').removeClass('off');
            $('body').css('height','100vh').css('overflow','hidden');
        }else{
            $(this).removeClass('open');
            $('.lnb').addClass('off').removeClass('on');
            $('body').css('height','auto').css('overflow','auto');
        }
    }
    return false;
})

$('.rr>div>ul>li>a').eq(0).addClass('focus').next().show().parent().siblings().find('>div').hide();
$('.wn>div>ul>li>a').eq(0).addClass('focus').next().show().parent().siblings().find('>div').hide();
$('.first>div>div>ul>li>a').on('click',function(){
    if($(window).width()>768){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
    }
    if($(window).width()<=768){
        if($('.first>div>div>ul').hasClass('open') == false){
            $(this).parent().parent().addClass('open').css('height','auto');
            $(this).parent().siblings().show();
        }else{
            $(this).addClass('focus').next().show().parent().siblings().hide().find('>a').removeClass('focus').next().hide();
            $(this).parent().parent().removeClass('open').css('height','50px');
        }
    }
    return false;
})

$('.schIcon').on('click',function(){
    if($(window).width()<=768){
        $(this).toggleClass('open');
        $('.search').slideToggle(500);
    }
    return false;
})

if($(window).width()<=768){
    $('.lnbWrap>ul>li').eq(0).find('>a').addClass('active').next().show();
    $('.lnbNav>li').eq(0).find('>a').addClass('active').next().show();
}

$('.lnbWrap>ul>li>a').on('click',function(){
    if($(window).width()<=768){
        $(this).toggleClass('active').next().toggle().parent().siblings().find('>a').removeClass('active').next().hide();
    }
    return false;
})

$('.lnbNav>li>a').on('click',function(){
    if($(window).width()<=768){
        $(this).addClass('active').next().show().parent().siblings().find('>a').removeClass('active').next().hide();
    }
    return false;
})