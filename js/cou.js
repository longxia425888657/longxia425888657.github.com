/**
 * Created by Administrator on 2017/2/7.
 */

$(function(){
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "/";
    str += (mydate.getMonth()+1) + "/";
    str += mydate.getDate() + " ";
    str+=mydate.getHours()+':';
    str+=mydate.getMinutes()+':';
    str+=mydate.getSeconds();

    $(".count_down").countDown({
        startTimeStr:str,//��ʼʱ��
        endTimeStr:'2018/1/1 23:59:59',//����ʱ��
        daySelector:".day_num",
        hourSelector:".hour_num",
        minSelector:".min_num",
        secSelector:".sec_num"
    });
})
