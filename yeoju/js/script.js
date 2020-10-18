$('.lnbNav>li>a').hover(function(){
    if($(window).width()>1024){
        $('.lnbCon').show();
        $('.lnbConBg').show();
    }
})
$('.lnbWrap').on('mouseleave',function(){
    if($(window).width()>1024){
        $('.lnbCon').hide();
        $('.lnbConBg').hide();
    }
})
$('.lnbConNav>li>a').hover(function(){
    if($(window).width()>1024){
        $(this).parent().parent().parent().prev().addClass('focus').parent().siblings().find('>a').removeClass('focus');
    }
},function(){
    if($(window).width()>1024){
        $(this).parent().parent().parent().prev().removeClass('focus')
    }
})
$('.lnbNav>li>a').on('click',function(){
    if($(window).width()<=1024 && $(window).width()>768){
        if($('.lnbWrap').hasClass('open') == false){
            $('.lnbConBg').animate({'height':'271'},300);
            $('.lnbCon').animate({'height':'270'},300);
            $('.lnbWrap').addClass('open');
        }else{
            $('.lnbConBg').animate({'height':'0'},300);
            $('.lnbCon').animate({'height':'0'},300);
            $('.lnbWrap').removeClass('open');
        }
    }
})
// 연관사이트 슬라이더
var sn=true;
$('.sitesWrap .stopBtn').click(function(){
    if(sn==true){
     $(this).addClass('on'); 
     $('.sites').slick('slickPause'); //슬라이더 자동실행 일시정지
    } else {
     $(this).removeClass('on'); 
     $('.sites').slick('slickPlay'); //슬라이더 자동실행
    }
    sn = !sn;
});

if($(window).width()>1024){
    $('.sites').slick({
        infinite:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:1000,
        appendArrows:".arrowBtn",
        slidesToShow:5,
        slidesToScroll:1
    })
}

if($(window).width()<=1024 && $(window).width()>768){
    $('.sites').slick({
        infinite:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:1000,
        appendArrows:".arrowBtn",
        slidesToShow:5,
        slidesToScroll:1
    })
}

if($(window).width()<=768){
    $('.sites').slick({
        infinite:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:1000,
        appendArrows:".arrowBtn",
        slidesToShow:3,
        slidesToScroll:1
    })
}

$('.allMenu').on('click',function(){
    if($(window).width()<=768){
        if($('.allMenu').hasClass('open') == false){
            $(this).addClass('open');
            $('.lnb').animate({'margin-left':'0'},500);
            $('body').css('height','100vh').css('overflow','hidden');
        }else{
            $(this).removeClass('open');
            $('.lnb').animate({'margin-left':'100%'},500);
            $('body').css('height','auto').css('overflow','auto');
        }
    }
})
if($(window).width()<=768){
    $('.lnbNav>li').eq(0).find('>a').addClass('focus').next().show().parent().siblings().find('>div').hide();
}
$('.lnbNav>li>a').on('click',function(){
    if($(window).width()<=768){
        $(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
    }
})