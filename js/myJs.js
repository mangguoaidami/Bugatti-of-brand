/**
 * Created by z-lion on 2016/8/27.
 */
$(function(){

    var $carbody = $(".carbody");
    var $carLamp = $(".carLamp");
    var $carMinLamp = $(".carMinLamp");
    var $lampAudio = $(".lampAudio");
    var $toEn = $(".toEn");
    var $toZ_ch = $(".toZ_ch");
    var $toEn = $(".toEn");
    var $url=" ";

    /*car定位*/
 /*   $carbody.css(
        {
            "margin-left":-$carbody.width()/2,
            "margin-top":-$carbody.height()/2
        }
    )
    $carLamp.css(
        {
            "margin-left":-$carLamp.width()/2,
            "margin-top":-$carLamp.height()/2
        }
    )
    $carMinLamp.css(
        {
            "margin-left":-$carMinLamp.width()/2,
            "margin-top":-$carMinLamp.height()/2
        }
    )*/




    /*灯光闪烁动画*/
    var $carMinLamp = $(".carMinLamp")


        $($carbody).ready(function(){
            $carLamp.delay(1900).animate({
                opacity:"1"
            },1500,function(){

            });

            $carMinLamp.delay(5000).animate({
                opacity:"1"
            },1500);


        })


    /*播放封面audio*/
    setTimeout(function(){
        $("#lampAudio").jPlayer({
            ready:function(){
                $(this).jPlayer("setMedia",{
                    mp3:"more/bgaudio.mp3"
                }).jPlayer("play");
            },
            supplied:"mp3"
        });
    },2000);

    /*链接进入*/

    $toEn.on("click", function(){
        $("body").animate({
            opacity:"0"
        },2000,function(){
            window.location="home.html";
        })

    });

    $toZ_ch.on("click", function(){
        $("body").animate({
            opacity:"0"
        },2000,function(){
            window.location="home.html";
        })

    });


    $toEn.on("click", function(){
        $("body").animate({
            opacity:"0"
        },2000,function(){
            window.location="home_en.html";
        })

    })







})










