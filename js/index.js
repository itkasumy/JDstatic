/**
 * Created by Administrator on 2016/09/03.
 */
$(function(){
    //焦点图js
    var num = 0;
    var timer = null;
    var myFn = function(){
        num++;
        if(num > 5){
            num = 0;
        }
        $(".focus ol li").eq(num).addClass("current").siblings().removeClass("current");
        $(".focus ul li").eq(num).fadeIn().siblings().hide();
    }
    $(".focus ul li").eq(0).show();
    $(".focus ol li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".focus ul li").eq($(this).index()).fadeIn().siblings().hide();
        num = $(this).index();
    })
    timer = setInterval(myFn,1500)
    $(".focus").hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(myFn,1500)
    })
    
    $(".focus .arrl").click(function(){
        num -= 1;
        if(num < 0){
            num = 5;
        }
        $(".focus ol li").eq(num).addClass("current").siblings().removeClass("current");
        $(".focus ul li").eq(num).fadeIn().siblings().hide();
    })
    $(".focus .arrr").click(function(){
        num += 1;
        if(num > 5){
            num = 0;
        }
        $(".focus ol li").eq(num).addClass("current").siblings().removeClass("current");
        $(".focus ul li").eq(num).fadeIn().siblings().hide();
    })
    //焦点图js结束
    //今日推荐js
    var numb = 0;
    $(".today .today-right .arrow .arrl").click(function(){
        numb--;
        if(numb < 0){
            numb = 5;
        }
        var move = -1004*numb;
        $(".today .today-right ul").stop().animate({'left':move + 'px'},500);
    })
    $(".today .today-right .arrow .arrr").click(function(){
        numb++;
        if(numb > 5){
            numb = 0;
        }
        var move = -1004*numb;
        $(".today .today-right ul").stop().animate({'left':move + 'px'},500);
    })
    //今日推荐js结束
})