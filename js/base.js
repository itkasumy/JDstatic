/**
 * Created by Administrator on 2016/09/05.
 */
$(function(){
    var address = ["北京","上海","天津","重庆","河北","山西","河南","辽宁","吉林","黑龙江","内蒙古","江苏","山东","安徽","浙江","福建","湖北","湖南","广东","广西","江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","台湾","香港","澳门","钓鱼岛","海外"]
    $(".shortcut_left .shortcut-left-detail-list li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    })
})