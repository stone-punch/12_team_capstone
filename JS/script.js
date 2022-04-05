$(document).ready(function(){

    //네이게이션 메뉴
    $("#header nav ul.main-menu>li").hover(function(){
        $("ul.sub-menu").stop().slideDown();
    },function (){
        $("ul.sub-menu").stop().slideUp();
    });



    //메인슬라이드
    $("#slide ul.slide-all>li").eq(0).siblings().css("top","-700px");

    var slideI=0;

    setInterval(function (){

        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $("#slide ul.slide-all>li").eq(slideI).siblings().animate({"top":"-700px"},500);
        $("#slide ul.slide-all>li").eq(slideI).animate({"top":"0"},500);
    },3000);

    //탭메뉴 공지사항

    $("#contents .notice-gel h3").click(function (){
        $("#contents .notice-gel h3").removeClass("on");
        $(this).addClass("on");
        $("#contents .notice-gel ul").removeClass("on");
        $(this).next("ul").addClass("on");



    });



});//ready end