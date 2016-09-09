/**
 * Created by »¶Ó­Ê¹ÓÃ on 2016-09-07.
 */

//ÂÖ²¥Í¼
$(".lbt ul").append($(".lbt ul li").eq(0).clone(true));
var dNum = 0;
var tNum =0;
$(".lbt ol li").mouseover(function(){
    clearInterval(timer);
    $(this).addClass("active").siblings().removeClass("active");
    dNum = $(this).index();
    tNum = $(this).index();
    $(".lbt ul").animate({"left":-695*tNum+"px"},200);
});
$(".lbt ol li").mouseout(function(){
    timer = setInterval(autoPlay,3000);
})
function autoPlay(){
    dNum++;
    if(dNum>4){
        dNum = 0;
    }
    $(".lbt ol li").eq(dNum).addClass("active").siblings().removeClass("active");
    tNum++;
    if(tNum>5){
        tNum=1;
        $(".lbt ul").css("left",0);
    }
    $(".lbt ul").animate({"left":-695*tNum+"px"},200);
}
var timer = setInterval(autoPlay,3000);

//Ñ¡Ïî¿¨ÇÐ»»
$(".center ul li").mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".center ol").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
$(".right ul li").mouseover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".right ol").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
