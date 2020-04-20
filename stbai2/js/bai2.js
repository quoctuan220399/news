$(document).ready(function () {
    
    var vt = $('header').offset().top + 150;
    $(window).scroll(function(){

        var scroll = $('html').scrollTop();
        console.log(vt);
        console.log(scroll);
        if(scroll >= vt){

            $('.navbar').addClass('small');
        }
        else{

            $('.navbar').removeClass('small');
        }
    });

    $('.card').click(function(){

        var num = $(this).data('num');
        $('.top-info').addClass('show');
        $('body').addClass('hide');
        $('.container-fluid').removeClass('zdex');
        $('.container-fluid:nth-child('+(num)+')').addClass('zdex');
    });

    $('.row.text a.btn.btn-warning').click(function(){

        $('.top-info').removeClass('show');
        $('body').removeClass('hide');
    });

    $('.row.close svg').click(function(){

        $('.top-info').removeClass('show');
        $('body').removeClass('hide');
    });
});