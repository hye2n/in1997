$('.topBtn').on('click',function(){
	$('html, body').animate({
		scrollTop:0
	},1000);
	return false;
});
setInterval('today()',1000);
function today(){
	var now = new Date();
	var hr = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	var mon = now.getMonth()+1;
	var date = now.getDate();
	var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
	$('.time>span').eq(0).text(hr);
	$('.time>span').eq(2).text(min);
	$('.time>span').eq(4).text(sec);
	$('.month>span').text(mon);
	$('.date>span').text(date);
	$('.day>span').text(week[now.getDay()]);
	if(hr > 24){
		hr -= 24;
	}
	if(hr < 10){
		$('.time>span').eq(0).text('0'+hr);
	}
	if(min < 10){
		$('.time>span').eq(2).text('0'+min);
	}
	if(sec < 10){
		$('.time>span').eq(4).text('0'+sec);
	}
	if(mon < 10){
		$('.month>span').text('0'+mon);
	}
	if(date < 10){
		$('.date>span').text('0'+date);
	}
}

var lnbTop = $('.lnb').offset().top;
var tnbTop = $('.tnb').offset().top;
var ltnbH = $('.lnb').height()+$('.tnb').height();
var hdh = $('header').height();
var pfTop = $('.portfolio').offset().top;
var plTop = $('.profile').offset().top;
var ctTop = $('.contact').offset().top;

var have = have;
var has= has;
var had = had;

$(window).scroll(function(){
	var st = $(document).scrollTop();
	if($(window).width()>1024){
		if(st > lnbTop){
			$('header').css({
				'position':'fixed',
				'top':'-'+lnbTop+'px'
			});
			$('body').css('padding-top',hdh+'px');
		}else{
			$('header').css({
				'position':'relative',
				'top':'0'
			});
			$('body').css('padding-top','0');
		}
	}
	if($(window).width()<=1024){
		if(st > tnbTop){
			$('header').css({
				'position':'fixed',
				'top':'-'+tnbTop+'px'
			});
			$('body').css('padding-top',hdh+'px');
		}else{
			$('header').css({
				'position':'relative',
				'top':'0'
			});
			$('body').css('padding-top','0');
		}
    }

	// nav>ul>li 스크롤시 클래스
	if(st<pfTop-hdh){
		$('.nav>ul>li>a').removeClass('focus');
	}
	if(st>=pfTop-hdh && st<plTop-hdh){
		if(have==have){
			$('.nav>ul>li').eq(0).find('>a').addClass('focus').addClass('active');
		}
		$('.nav>ul>li').eq(0).find('>a').parent().siblings().find('>a').removeClass('focus').removeClass('active');
		have = !have;
		has = has;
		had = had;
	}
	if(st>=plTop-hdh && st<ctTop-hdh){
		if(has==has){
			$('.nav>ul>li').eq(1).find('>a').addClass('focus').addClass('active');
		}
		has = !has;
		had = had;
		have = have;
		$('.nav>ul>li').eq(1).find('>a').parent().siblings().find('>a').removeClass('focus').removeClass('active');
	}
	if(st>=ctTop-hdh){
		if(had==had){
			$('.nav>ul>li').eq(2).find('>a').addClass('focus').addClass('active');
		}
		$('.nav>ul>li').eq(2).find('>a').parent().siblings().find('>a').removeClass('focus').removeClass('focus');
		had = !had;
		has = has;
		have = have;
	}
});

var lnbh = $('.lnb').height();
var tnbh = $('.tnb').height();
var hdih = $('.headerInner').height();
$('.nav>ul>li>a').on('click',function(){
	var goto  = $(this).attr('name');
	$('html, body').animate({
		'scrollTop':$('.'+goto).offset().top - hdh + 'px'
	},1000);
	return false;
});

// var up = up;
// function addBar(cl,or,va){	
// 	$(window).scroll(function(){
// 		if($(document).scrollTop() > $('.portfolio').offset().top - lnbh - tnbh){
// 			if($(document).scrollTop() > $('.'+cl).offset().top - lnbh - tnbh && up == up){
// 				$('.nav>ul>li').eq(or).find('>a').addClass('focus').parent().siblings().find('>a').removeClass('focus');
// 				up = va
// 			}
// 		}
// 	})
// }
// addBar('portfolio','0','down');
// addBar('profile','1','down');ew
// addBar('contact','2','down');

$('.nav>ul>li>a').hover(function(){
	if($(this).hasClass('active') == false){
		$(this).addClass('focus');
	}
},function(){
	if($(this).hasClass('active') == false){
		$(this).removeClass('focus');
	}
});

/*$('.nav>ul>li>a').on('click',function(){
	var col = $(this).attr('name');
	$('html, body').animate({
		scrollTop:$('.'+col).offset().top + 'px'
	},1000);
	return false;
});*/

/*$('.plInner>a').hover(function(){
	$(this).find('>p').animate({'left':'0'},500);
},function(){
	$(this).find('>p').animate({'left':'-280px'},500);
});*/

$('.vlInner').slick({
    infinite:true,
    dots:false,
    autoplay:true,
    autoplaySpeed:2000,
    speed:1500,
    slidesToShow:1,
    slidesToScroll:1,
    appendArrows:".arrowBtn"
})
var sn=true;
$('.vlWrap .stopBtn').click(function(){
    if(sn==true){
     $(this).addClass('on'); 
     $('.vlInner').slick('slickPause'); //슬라이더 자동실행 일시정지
    } else {
     $(this).removeClass('on'); 
     $('.vlInner').slick('slickPlay'); //슬라이더 자동실행
    }
    sn = !sn;
});

//이력서,자기소개서 버튼
$('.plInner>a').on('click',function(){
	if($(this).siblings().find('>p').hasClass('focus')){
		$(this).siblings().find('>p').removeClass('focus').addClass('off');
	}
	$(this).find('>p').addClass('focus');
	return false;
});

$('.plInner>a').hover(function(){
	if($(this).find('>p').hasClass('focus') == false){
		$(this).find('>p').addClass('on').removeClass('off');
	}
},function(){
	if($(this).find('>p').hasClass('focus') == false){
		$(this).find('>p').addClass('off').removeClass('on');
	}
});

if($(window).width()>1024){

	/*$(window).scroll(function(){
		var st = $(document).scrollTop();
		var hh = $('header').height();
		var left;*/
		/*$('.headerNav>ul>li>a').animate({'margin-top':'15px'},100);
		if(st >= 0 && st < $('.profile').offset().top-hh){
			$('.headerNav>ul>li>a').eq(0).animate({'margin-top':'35px'},100);
		}else if(st >= $('.profile').offset().top-hh && st < $('.contact').offset().top-hh){
			$('.headerNav>ul>li>a').eq(1).animate({'margin-top':'35px'},100);
		}else if(st >= $('.contact').offset().top-hh && st < $('html, body').height()){
			$('.headerNav>ul>li>a').eq(2).animate({'margin-top':'35px'},100);
		}*/
		/*if(st >= 0 && st < $('.profile').offset().top-hh && left != 'left'){
			$('.headerNav>ul>li>a').eq(0).attr('class','on').parent().siblings().find('>a').attr('class','off');
			left = 'left';
		}else if(st >= $('.profile').offset().top-hh && st < $('.contact').offset().top-hh && left != 'right'){
			$('.headerNav>ul>li>a').eq(1).attr('class','on').parent().siblings().find('>a').attr('class','off');
			left = 'right';
		}else if(st >= $('.contact').offset().top-hh && st < $('html, body').height() && left != 'top'){
			$('.headerNav>ul>li>a').eq(2).attr('class','on').parent().siblings().find('>a').attr('class','off');
			left = 'top';
		}*/
	}

if($(window).width()<=1024 && $(window).width()>768){
	$('.ham').on('click',function(){
		$(this).next().animate({'right':'0'},500);
	});
	$('.close').on('click',function(){
		$(this).parent().animate({'right':'-609px'},500);
	});
}

if($(window).width()<=768){
	$('.ham').on('click',function(){
		if(!$('.ham').hasClass('open')){
			$(this).addClass('open').parent().animate({'top':'60px'},500);
		}else if($('.ham').hasClass('open')){
			$(this).removeClass('open').parent().animate({'top':'0'},500);
		}
	});
}

if($(window).width()>1280){
	$('.pfList>li').eq(0).find('>a>p').text('1,');
	$('.pfList>li').eq(1).find('>a>p').text('2,');
	$('.pfList>li').eq(2).find('>a>p').text('3,');
	$('.pfList>li').eq(3).find('>a>p').text('4,');
	$('.pfList>li').eq(4).find('>a>p').text('5,');
}
if($(window).width()<=1280 && $(window).width()>1024){
	$('.pfList>li>a>svg>path').attr('d','M0,0 L100,0 L120,23 L100,46 L0,46 Z');
}
if($(window).width()<=1024 && $(window).width()>640){
	$('.pfList>li>a>svg>path').attr('d','M0,0 L180,0 L180,46 L0,46 Z');
}
if($(window).width()<=640){
	$('.pfList>li>a>svg>path').attr('d','M0,0 L300,0 L300,46 L0,46 Z');
}
if($(window).width()>640){
	$('.pfList>li').eq(0).find('>a').addClass('focus').next().show().parent().siblings().find('>a').next().hide();
}
if($(window).width()<=640){
	$('.pfList>li').eq(0).find('>a').addClass('focus').find('path').attr('d','M20,0 L300,0 L300,46 L0,46 L0,20 Z').parent().parent().next().show().parent().siblings().find('>a').next().hide();
}
$('.pfList>li>a').on('click',function(){
	if($(window).width()>640){
		$(this).addClass('focus').next().show().parent().siblings().find('>a').removeClass('focus').next().hide();
	}
	if($(window).width()<=640){
		$(this).addClass('focus').find('path').attr('d','M20,0 L300,0 L300,46 L0,46 L0,20 Z').parent().parent().next().show().parent().siblings().find('>a').removeClass('focus').find('path').attr('d','M0,0 L300,0 L300,46 L0,46 Z').parent().parent().next().hide();
	}
	return false;
});

$('.text .moreBtn').on('click',function(){
	$(this).next().show();
    $('body').css('height','100vh').css('overflow','hidden');
    $('.pfList>li>a').css('z-index','9980');
	return false;
});

$('.more .closeBtn').on('click',function(){
	$(this).parent().parent().hide();
    $('body').css('height','auto').css('overflow','auto');
    $('.pfList>li>a').css('z-index','9990');
	return false;
});

$('.frame#one').slick({
	infinite:false,
    dots:false,
    arrow:true,
	autoplay:false,
	slidesToShow:1,
	slidesToScroll:1
});
$('.frame#two').slick({
	infinite:false,
    dots:false,
    arrow:true,
	autoplay:false,
	slidesToShow:1,
	slidesToScroll:1
});
$('.frame#three').slick({
	infinite:false,
    dots:false,
    arrow:true,
	autoplay:false,
	slidesToShow:1,
	slidesToScroll:1
});
$('.frame#four').slick({
	infinite:false,
    dots:false,
    arrow:true,
	autoplay:false,
	slidesToShow:1,
	slidesToScroll:1
});
$('.frame#five').slick({
	infinite:false,
    dots:false,
    arrow:true,
	autoplay:false,
	slidesToShow:1,
	slidesToScroll:1
});