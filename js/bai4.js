$(document).ready(function () {
    
    $('ul.list li.apoi').click(function(){

        $('.form-black').addClass('hien');
        $('.table-form').addClass('xuong');
        $('html').css({'overflow-y':'hidden'})
    });

    $('.table-form i.fa.fa-times').click(function(){

        $('.form-black').removeClass('hien');
        $('.table-form').removeClass('xuong');
        $('html').css({'overflow-y':'scroll'})
    });

    $('.arr-l').click(function(){

        var next = $('.active').next();
        if(next.length === 1){
        $('.active').addClass('out-left')
        next.addClass('active1'); 
        setTimeout(function(){

            $('.out-left').removeClass('out-left');
            $('.active').removeClass('active');
        },500);
        setTimeout(function(){
            $('.active1').addClass('active');
            $('.active1').removeClass('active1');
        },500);}

        else{
            $('.active').addClass('out-left')
            $('ul.slideshow li.slide:first-child').addClass('active1'); 
            setTimeout(function(){
    
                $('.out-left').removeClass('out-left');
                $('.active').removeClass('active');
            },500);
            setTimeout(function(){
                $('.active1').addClass('active');
                $('.active1').removeClass('active1');
            },500);}
    });

    $('.arr-r').click(function(){

        var prev = $('.active').prev();
        if(prev.length === 1){
        $('.active').addClass('out-left')
        prev.addClass('active1'); 
        setTimeout(function(){

            $('.out-left').removeClass('out-left');
            $('.active').removeClass('active');
        },500);
        setTimeout(function(){
            $('.active1').addClass('active');
            $('.active1').removeClass('active1');
        },500);}

        else{
            $('.active').addClass('out-left')
            $('ul.slideshow li.slide:last-child').addClass('active1'); 
            setTimeout(function(){
    
                $('.out-left').removeClass('out-left');
                $('.active').removeClass('active');
            },500);
            setTimeout(function(){
                $('.active1').addClass('active');
                $('.active1').removeClass('active1');
            },500);}
    });

    setInterval(function(){
        var next = $('.active').next();
        if(next.length === 1){
        $('.active').addClass('out-left')
        next.addClass('active1'); 
        setTimeout(function(){

            $('.out-left').removeClass('out-left');
            $('.active').removeClass('active');
        },500);
        setTimeout(function(){
            $('.active1').addClass('active');
            $('.active1').removeClass('active1');
        },500);}

        else{
            $('.active').addClass('out-left')
            $('ul.slideshow li.slide:first-child').addClass('active1'); 
            setTimeout(function(){
    
                $('.out-left').removeClass('out-left');
                $('.active').removeClass('active');
            },500);
            setTimeout(function(){
                $('.active1').addClass('active');
                $('.active1').removeClass('active1');
            },500);}
    },20000);

    var vt1 = $('.slider').offset().top;
    var vt2 = $('.body2').offset().top-100;
    var vt3 = $('.body3').offset().top-100;
    var vt4 = $('.boy6').offset().top;
    $(window).scroll(function () { 
        
        var scr = $('html').scrollTop();
        console.log(scr);
        console.log(vt1);
        if(scr >= vt1){

            $('apoi').addClass('hide');
            $('.header-left').addClass('ml');
            $('header').addClass('gan');
            $('.arrow-top').addClass('vis');
        }

        else{

            $('header').removeClass('gan');
            $('apoi').removeClass('hide');
            $('.header-left').removeClass('ml');
            $('.arrow-top').removeClass('vis');
        }

        if(scr >= vt2){

            $('.bd2-left').addClass('contact');
            $('.bd2-right').addClass('contact1');
        }
        if(scr >= vt3){

           $('ul.wb li').addClass('go-top');
           $('.img-top').addClass('top0');
        }
        else{

            $('.img-top').removeClass('top0');
        }
        if(scr >= vt4){

            $('.bd6-img').addClass('mounted');
         }
         else{

            $('.bd6-img').removeClass('mounted');
         }
    });

    $('.arrow-top').click(function(){

        $('html').animate({scrollTop:0},600);
    });


    $('ul.bd4-list li').click(function(){

        $('ul.bd4-list li').removeClass('hem');
        $(this).addClass('hem');
        var data = '.'+$(this).attr('data-fillter');
        console.log(data);
        $('ul.bd4-img').css({
            'display':'flex',
            'justify-content':'space-evenly'
        });
        $('ul.bd4-img').isotope({
            itemSelector:'li'
        });
        $('ul.bd4-img').isotope({
            filter:data
        });
    });

    $('.search-vio').click(function(){

        var num = $(this).data('num');
        $('.img-black').addClass('show');
        $('.img-bl li').removeClass('de');
        $('.img-bl li:nth-child('+(num)+')').addClass('de');
    });

    $('.choose i.fa.fa-times').click(function(){

        $('.img-black').removeClass('show');
        $('ul.img-bl').removeClass('mat');
       $('.img-share').removeClass('show1');
       $('ul.img-bl').removeClass('big-img');
       $('.i-b').removeClass('more-black');
    });

    $('.i-b').click(function(){

        $('.img-black').removeClass('show');
        $('ul.img-bl').removeClass('mat');
       $('.img-share').removeClass('show1');
       $('ul.img-bl').removeClass('big-img');
       $('.i-b').removeClass('more-black');
    });

    $('.img-share i.fa.fa-times').click(function(){

        $('ul.img-bl').removeClass('mat');
       $('.img-share').removeClass('show1');
    });

    $('.choose i.fa.fa-window-maximize').click(function(){

        $('ul.img-bl').addClass('big-img');
        $('.i-b').addClass('more-black');
    });

    $('.choose i.fa.fa-share').click(function(){

       $('ul.img-bl').addClass('mat');
       $('.img-share').addClass('show1');
    });
});
