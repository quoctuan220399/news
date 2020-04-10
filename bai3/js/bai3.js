$(document).ready(function () {

    var a = document.getElementsByClassName('a1');
    var slide = document.getElementsByClassName('slide');
    
    $('#text::before').click(function (e) { 
       
        console.log('da nhan');
       a[0].removeClass('hien');
       a[1].toggleClass('hien'); 
    });

    $('.header-left i.fa.fa-search').click(function(){

        $('.search-den').addClass('hien-den');
    });

    $('.close').click(function(){

        $('.search-den').removeClass('hien-den');
    });

    $('.thanh').click(function(){

        $('.thanh1').addClass('xoay1');
        $('.thanh2').addClass('an');
        $('.thanh3').addClass('xoay2');
        $('.black-left').addClass('on');
        $('.menu-left').addClass('on1');
    });

    $('.menu-close').click(function(){

        $('.thanh1').removeClass('xoay1');
        $('.thanh2').removeClass('an');
        $('.thanh3').removeClass('xoay2');
        $('.black-left').removeClass('on');
        $('.menu-left').removeClass('on1');
    });

    var count = 0;

    $('.slide-next').click(function(){

        if(count == 0){
        $('.active').removeClass('active');
        slide[1].classList.add('active');
        count = 1;
        }
        else if(count == 1){
            $('.active').removeClass('active');
            slide[0].classList.add('active');
            count = 0;
            }
    });

    
    $('.slide-prev').click(function(){

        if(count == 0){
        $('.active').removeClass('active');
        slide[1].classList.add('active');
        count = 1;
        }
        else if(count == 1){
            $('.active').removeClass('active');
            slide[0].classList.add('active');
            count = 0;
            }
    });

    setInterval(function(){
        
        if(count == 0){
            $('.active').removeClass('active');
            slide[1].classList.add('active');
            count = 1;
            }
            else if(count == 1){
                $('.active').removeClass('active');
                slide[0].classList.add('active');
                count = 0;
                }
    },10000);
});