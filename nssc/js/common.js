var hTop = $('.header').offset().top;
var hh = $('.header').height();
var vbTop = $('.vsBar').offset().top;
$(window).scroll(function(){
	var st = $(document).scrollTop();
	if($(window).width()<=1024){
		if(st > hTop){
			$('.header').css({
				'position':'fixed',
				'top':'0'
			});
			$('body').css('padding-top',hh+'px');
		}else{
			$('.header').css({
				'position':'relative',
				'top':'0'
			});
			$('body').css('padding-top','0');
		}
    }
    if($(window).width()>1024){
		if(st > hTop){
			$('.header').css({
				'position':'fixed',
				'top':'0'
			});
		}else{
			$('.header').css({
				'position':'absolute',
				'top':'0'
			});
		}
    }
    if(st > vbTop-hh){
        $('.vsBar').css({
            'position':'fixed',
            'top':hh+'px',
            'width':'100%'
        });
    }else{
        $('.vsBar').css({
            'position':'static'
        })
    }
});

$('.headerInner .menu').on('click',function(){
    if($(window).width()<768){
        $('.tabMenu').animate({
            'left':'0'
        },500)
        $('body').css('height','100vh').css('overflow','hidden');
    }
    if($(window).width()<1024){
        if($('.tabMenu').hasClass('open') == false){
            $(this).addClass('open');
            $('.tabMenu').addClass('open').animate({
                'right':'0'
            },500);
            $('body').css('height','100vh').css('overflow','hidden');
        }else{
            $(this).removeClass('open');
            $('.tabMenu').removeClass('open').animate({
                'right':'-500px'
            },500);
            $('body').css('height','auto').css('overflow','auto');
        }
    }
    return false;
})

$('.tabMenu .close').on('click',function(){
    if($(window).width()<768){
        $('.tabMenu').animate({
            'left':'-768px'
        },500)
        $('body').css('height','auto').css('overflow','auto');
    }
    return false;
})

var schH = $('.schWrap').height();
$('.schWrap').css('top','-'+hh+'px');
$('.headerInner .search').on('click',function(){
    if($(window).width()<1280){
        $('.schWrap').animate({
            'top':'0'
        },500);
    }
    return false;
})
$('.schWrap .closeBtn').on('click',function(){
    if($(window).width()<1280){
        $('.schWrap').animate({
            'top':'-'+hh+'px'
        },500);
    }
    return false;
})

$('.lnbMob>ul>li>a').on('click',function(){
    if($(window).width()<1024){
        $(this).addClass('focus').parent().siblings().find('>a').removeClass('focus');
    }
    return false;
})

var lwh = $('.lnbWrap').height();
var hih = $('.headerInner').height();
$('.lnb>ul>li>a').hover(function(){
    $('.headerWrap').animate({
        'height':hih+lwh+'px',
    },50);
    $(this).next().show().parent().siblings().find('>div').hide();
})
$('.headerWrap').mouseleave(function(){
        $('.headerWrap').animate({
            'height':hih+'px',
        },50);
        $('.lnbWrap').hide();
        $('.lnb').removeClass('open');
})

$('.tabWrap>ul>li').eq(0).find('>a').addClass('active').next().show();
$('.tabWrap>ul>li>a').on('click',function(){
    $(this).addClass('active').next().show().parent().siblings().find('>a').removeClass('active').next().hide();
    return false;
})

$('.tabCon>ul>li').eq(0).find('>a').addClass('active').next().show();
$('.tabCon>ul>li>a').on('click',function(){
    $(this).addClass('active').next().show().parent().siblings().find('>a').removeClass('active').next().hide();
    return false;
})

$('.vsBar .left>div>a').on('click',function(){
    if($(window).width()<=768){
        $(this).next().toggleClass('open').slideToggle('fast');
    }
    if($(window).width()>768){
        $(this).next().toggleClass('open').slideToggle('fast').parent().siblings('div').find('ul').removeClass('open').slideUp('fast');
    }
    return false;
})

$('.vsBar .left>div>ul>li>a').on('click',function(){
    var txt = $(this).attr('value');
    $(this).parent().parent().slideUp('fast').removeClass('open').prev().text(txt);
    return false;
})