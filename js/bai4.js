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
    $(window).scroll(function () { 
        
        var scr = $('html').scrollTop();
        console.log(scr);
        console.log(vt1);
        if(scr >= vt1){

            $('header').addClass('gan');
            $('.arrow-top').addClass('vis');
        }

        else{

            $('header').removeClass('gan');
            $('.arrow-top').removeClass('vis');
        }

        if(scr >= vt2){

            $('.bd2-left').addClass('contact');
            $('.bd2-right').addClass('contact1');
        }
    });

    $('.arrow-top').click(function(){

        $('html').animate({scrollTop:0},600);
    });
});