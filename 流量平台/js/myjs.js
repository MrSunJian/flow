/**
 * Created by �� on 2017/9/21.
 */

var width=$(window).width();
console.log(width)
var height=$(window).height();
var width1=$("body").width();
var height1=$("body").height();
// console.log(width)
// console.log(height)
$(function () {
    $(".hint_info1").css({"top":height/2-200,"left":width/2-200})
    $(".hint_info2").css({"top":height/2-300,"left":width/2-200})
    $(".hint_info3").css({"top":height/2-200,"left":width/2-300})
    $(".hint_info_msg").css("left",width/2-200)
    $(".cover").css({width:width1,height:height1})
})
//挖单弹窗
$(".set_info1").click(function(){
    $(".cover").fadeIn();
    $("#hint_info1").fadeIn();
})
$(".info1_cha").click(function(){
    $(".cover").fadeOut();
    $("#hint_info1").fadeOut();
})

//筛选弹窗
$(".set_info2").click(function(){
    $(".cover").fadeIn();
    $("#hint_info2").fadeIn();
})

$(".info2_cha").click(function(){
    $(".cover").fadeOut();
    $("#hint_info2").fadeOut();
})

//详情
$(".detail").click(function(){
    $(".cover").fadeIn();
    $("#hint_info3").fadeIn();
})
$(".info3_cha").click(function(){
    $(".cover").fadeOut();
    $("#hint_info3").fadeOut();
})

//筛选2
$(".set_info3").click(function(){
    $(".cover").fadeIn();
    $("#hint_info4").fadeIn();
})
$(".info4_cha").click(function(){
    $(".cover").fadeOut();
    $("#hint_info4").fadeOut();
})
//导出
$(".set_info4").click(function(){
    $(".cover").fadeIn();
    $("#hint_info5").fadeIn();
})
$(".info5_cha").click(function(){
    $(".cover").fadeOut();
    $("#hint_info5").fadeOut();
})
$("#export").click(function(){
    $(".cover").fadeOut();
    $("#hint_info5").fadeOut();
})


$(".page").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})

//全选
$(".list_table thead input[type='checkbox']").click(function(){
    if(this.checked){
        $(".list_table tbody input[type='checkbox']").attr("checked",true);
    }else{

        $(".list_table tbody input[type='checkbox']").attr("checked",false);
    }

})




//日期插件
$.fn.datetimepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今天",
    suffix: [],
    meridiem: ["上午", "下午"]
};

$(".form_datetime1").datetimepicker({
    format: 'yyyy-mm-dd hh:ii',
    language:'zh-CN',
    pickerPosition: "bottom-right",
    autoclose: true,
    todayBtn: true,
    minuteStep:1
});
$(".form_datetime2").datetimepicker({
    format: 'yyyy-mm-dd hh:ii',
    language:'zh-CN',
    pickerPosition: "bottom-left",
    autoclose: true,
    todayBtn: true,
    minuteStep:1
});