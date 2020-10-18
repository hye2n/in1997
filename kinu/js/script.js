if($(window).width()>768){
    $('.vs1L').slick({
        infinite:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        appendArrows:".arrowBtn"
    })
}
if($(window).width()<=768){
    $('.vs1L').slick({
        infinite:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        appendArrows:".arrowBtn"
    })
}
var sn=true;
$('.vs1 .stopBtn').click(function(){
    if(sn==true){
     $(this).addClass('on'); 
     $('.vs1L').slick('slickPause'); //슬라이더 자동실행 일시정지
    } else {
     $(this).removeClass('on'); 
     $('.vs1L').slick('slickPlay'); //슬라이더 자동실행
    }
    sn = !sn;
});

// visual2슬라이더
if($(window).width()>1024){
    $('.vs2Inner').slick({
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1
    })
}

if($(window).width()<=1024 && $(window).width()>768){
    $('.vs2Inner').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1
    })
}

if($(window).width()<=768){
    $('.vs2Inner').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1
    })
}

// site슬라이더
if($(window).width()>1024){
    $('.siteLogo').slick({
        infinite:true,
        slidesToShow:5,
        slidesToScroll:5,
        autoplay:true,
        autoplaySpeed:3000,
        speed:5000,
        appendArrows:".arrowBtn2"
    })
}

if($(window).width()<=1024 && $(window).width()>768){
    $('.siteLogo').slick({
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:5000,
        appendArrows:".arrowBtn2"
    })
}

if($(window).width()<=768){
    $('.siteLogo').slick({
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:5000,
        appendArrows:".arrowBtn2"
    })
}

var sw=true;
$('.siteWrap .stopBtn').click(function(){
    if(sw==true){
     $(this).addClass('on'); 
     $('.siteLogo').slick('slickPause'); //슬라이더 자동실행 일시정지
    } else {
     $(this).removeClass('on'); 
     $('.siteLogo').slick('slickPlay'); //슬라이더 자동실행
    }
    
    sw = !sw;
});

$('.schIcon').on('click',function(){
    if($(window).width()<=768){
        $(this).toggleClass('open');
        $('.search').slideToggle(500);
    }
})