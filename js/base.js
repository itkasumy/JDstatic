/**
 * Created by Administrator on 2016/09/05.
 */
$(function(){
    var address = ["����","�Ϻ�","���","����","�ӱ�","ɽ��","����","����","����","������","���ɹ�","����","ɽ��","����","�㽭","����","����","����","�㶫","����","����","�Ĵ�","����","����","����","����","����","����","�ຣ","����","�½�","̨��","���","����","���㵺","����"]
    $(".shortcut_left .shortcut-left-detail-list li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    })
})