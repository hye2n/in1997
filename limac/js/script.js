//pc
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
$('.tabWrap').hover(function(){
    if($(window).width()>768){
        $(this).prev().addClass('focus').parent().siblings().find('>a').removeClass('focus');
    }
    },function(){
        if($(window).width()>768){
            $(this).prev().removeClass('focus');
        }
})
$('.service_list>li>a').hover(function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').replace('.png','-on.png'));
    $(this).find('span').css('color','#00acee');
},function(){
    $(this).find('img').attr('src',$(this).find('img').attr('src').replace('-on.png','.png'));
    $(this).find('span').css('color','#0065c7');
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
                'height':hh-66+'px'     
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

if($(window).width()<=768){
    $('.lnbTab>ul>li').eq(1).find('>a').addClass('focus').next().show();
    $('.lnbTab>ul>li>a').on('click',function(){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
        return false;
    })
}

//scroll시 header고정
var lnbTop = $('.lnb').offset().top;
var lnbH = $('.lnb').height();
var gnbH = $('.gnb').height();
var hdH = $('.header').height();
var snbH = $('.snb').height();
$(window).scroll(function(){
    var st = $(document).scrollTop();
    if($(window).width()>1024){
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
	}
	if($(window).width()<=1024){
		if(st > lnbTop){
			$('.header').css({
				'position':'fixed',
				'top':'-'+lnbTop+'px'
            });
            $('.snb').css({
                'position':'fixed',
                'top':lnbH+'px'
            });
			$('body').css('padding-top',hdH+'px');
		}else{
			$('.header').css({
				'position':'relative',
				'top':'0'
            });
            $('.snb').css({
                'position':'absolute',
                'top':'0'
            })
			$('body').css('padding-top','0');
		}
	}
});
// visual 슬라이더
$('.vsSlider').slick({
    infinite:true,
    autoplay:true,
    autoplaySpeed:3000,
    appendArrows:".arrowBtn"
})
var sw=true;
$('.vsWrap .stopBtn').click(function(){
    if(sw==true){
     $(this).addClass('on'); 
     $('.vsSlider').slick('slickPause'); //슬라이더 자동실행 일시정지
    } else {
     $(this).removeClass('on'); 
     $('.vsSlider').slick('slickPlay'); //슬라이더 자동실행
    }
    sw = !sw;
});
// visual 슬라이더
// $('.siteSlider').slick({
//     if($(window).width()>1024){
//         infinite:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         speed:3000,
//         slidesToShow:6,
//         slidesToScroll:1
//     }else if{$(window).width()>768}{
//         infinite:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         speed:3000,
//         slidesToShow:5,
//         slidesToScroll:1
//     }
// })
// if($(window).width()>1024){
//     $('.siteSlider').slick({
//         infinite:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         speed:3000,
//         slidesToShow:6,
//         slidesToScroll:1
//     })
// }
if($(window).width()>1024){
    $('.siteSlider').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        speed:3000,
        slidesToShow:6,
        slidesToScroll:1
    })
}
if($(window).width()<=1024 && $(window).width()>768){
    $('.siteSlider').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        speed:3000,
        slidesToShow:5,
        slidesToScroll:1
    })
}
if($(window).width()<=768 && $(window).width()>=0){
    $('.siteSlider').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        speed:3000,
        slidesToShow:3,
        slidesToScroll:1
    })
}

$('.snbWrap>h3>a').on('click',function(){
    if($(window).width()<=768){
        $(this).toggleClass('focus').parent().next().slideToggle();
        return false;
    }
    return false;
})