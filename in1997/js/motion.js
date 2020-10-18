/*new Vivus('vlSvg',{duration:500});*/
//new Vivus('pfSvg',{duration:50, type:'sync'});
//new Vivus('plSvg1',{duration:80});
//new Vivus('plSvg2',{duration:80});
//new Vivus('plSvg3',{duration:80});

var vvSvg2 = new Vivus('nameCard',{duration:50, type:'sync'});
var hh = $('header').height();
var plTop = $('.portfolio').offset().top;
var plh = $('.portfolio').height();

var vvSvg4 =  new Vivus('mailSvg',{duration:70});


var yes = yes;
$(window).scroll(function(){
        var st = $(document).scrollTop();
        if(st > $('#nameCard').offset().top - hh){
        vvSvg2.play();
        }else if(st < plTop-$('.plWrap').height()){
        vvSvg2.reset();
        }
});

