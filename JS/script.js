$(document).ready(function(){
    $("#header nav ul.main-menu>li").hover(function(){
        $("ul.sub-menu").stop.slideDown();



    },function (){
        $("ul.sub-menu").stop.slideUp();


    });



});//ready end