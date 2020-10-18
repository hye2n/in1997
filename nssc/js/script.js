var hTop = $('.header').offset().top;
var hh = $('.header').height();
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
});

if($(window).width()<=1024){
    $('.vsSlider').slick({
        infinite:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        slidesToShow:1
    })
}
if($(window).width()>1024){
    $('.vsSlider').slick({
        infinite:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        appendArrows:".arrowBtn",
        slidesToShow:1
    })
}

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

if($(window).width()<768 || $(window).width()>1024){
    $('.tab>ul>li').eq(0).find('>a').addClass('focus').next().show().parent().siblings().find('>div').hide();
}else{
    $('.tab>ul>li>a').removeClass('focus');
}
$('.tab>ul>li>a').on('click',function(){
    if($(window).width()<768){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
    }
    if($(window).width()>1024){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
    }
    return false;  
})

if($(window).width()>1024){
    $('.section2>.image>div').slick({
        infinite:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1
    })
}
