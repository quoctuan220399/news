$(document).ready(function () {
    var vt = $('header').offset().top+100;
    var vt1 = $('.body1').offset().top;
    var vt2 = $('.body2').offset().top;
    var vt3 = $('.body3').offset().top;
    var vt4 = $('.body5').offset().top-100;
    $(window).scroll(function(){ 
        
        var scroll = $('html').scrollTop();
        console.log(vt);
        console.log(scroll);
        if(scroll >= vt){

            $('.navbar').addClass('white-nav');
        }
        else{

            $('.navbar').removeClass('white-nav');
        }

        if(scroll >= vt1){
            $('.navbar-nav li').removeClass('color');
            $('.navbar-nav li:nth-child(1)').addClass('color');
        }
        if(scroll >= vt2){
            $('.navbar-nav li').removeClass('color');
            $('.navbar-nav li:nth-child(2)').addClass('color');
        }
        if(scroll >= vt3){
            $('.navbar-nav li').removeClass('color');
            $('.navbar-nav li:nth-child(3)').addClass('color');
        }
        if(scroll >= vt4){
            $('.navbar-nav li').removeClass('color');
            $('.navbar-nav li:nth-child(4)').addClass('color');
        }
    });

    $('ul.navbar-nav li').click(function(){

        $('.navbar-nav li').removeClass('color');
        $('.navbar-nav li').removeClass('color1');
        $(this).addClass('color');
        var num ='.' + $(this).data('bd');
        $('html').animate({scrollTop:$(num).offset().top},500);
    });
});