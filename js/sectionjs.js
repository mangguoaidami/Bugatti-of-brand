/**
 * Created by z-lion on 2016/8/28.
 */

$(document).ready(function(){
    var $playBtn = $(".playBtn")
    var $Souse = $("video")

    var $navbar_inverse = $(".navbar-inverse");


    /*playBtn定位*/
    $playBtn.css({
        "margin-left":-$playBtn.width()/2,
        "margin-top":-$playBtn.height()/2
    })

    /*导航消失控件部分*/
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 10)
            $navbar_inverse.css({
                "background-color": "#222",
                "padding":"9px 0;"
            });
        else
            $navbar_inverse.css({
                "background-color": "transparent",
                "padding":"6px 0"
            })
        ;

    });





})
