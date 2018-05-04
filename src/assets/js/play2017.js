var _date;
if(_date == undefined || _date == null){
    var d=new Date();
    var year= d.getFullYear();
    var m = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    var day =  d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    _date=year+"-"+m+"-"+day;
    // alert(_date);
}



function getQueryString(url,key) {
    var value = url.match(new RegExp("[?&#]" + key + "=([^&#]*)(&?)","i"));
    return value ? decodeURIComponent(value[1]) : "";
}
var _gsChannel="";
var play ={
    CONFIG:{
        playerjs:"js/xlPlayer.js",
        liveEplUrl:"",
        play_data:"",//频道列表信息
        play_num:0,  //正在直播的索引值;
        play_past:0,//可以回看的索引值;
        play_future:0,  //预告的索引值；
        user_play_num:0, //当前播放的索引值;
        play_boo:false,
        play_element:'',
        play_Time:0,
        live_Time:0
    },
    IdInfo:function(id){
        var _id,_sid;
        var idInfo = $.cookie('idInfo');
        if(idInfo!=undefined){
            idInfo = JSON.parse(idInfo);
            _id = idInfo.id;
            _sid = idInfo.sid;

        }else{
            _sid=26;
            _id=$('#live_Recommend_Mmodel').find('.chooseThisLi').attr('cid');
            if(_id==''||_id==undefined){
                _id=101;
            }
        }
        this.setupLivePlayer(_id);
    },
    init:function(id,idInfo){
        this.IdInfo(id);
    },
    setupLivePlayer:function(_id){
        // 1. 调用节目单接口
        // 2. 调用播放器js
        // 3. 初始化播放器
        // 4. 播放器开始播放，开始处理时时侦听时间，处理ui
        // 5. 回看调用播放器seekTo
        this.player = new xLVideoPlayer();
        this.player.creatPlayer({
            id:"flashContainer",
            width:"100%",
            height:"100%",
            "type":"live",
            flashvars:{
                "cid":_id,//option.channelId
                "keyWords":"zgltv:"+_id,
                hasTrack:1,
                "channelName":'浙江卫视',
                "newp2p":0,
                "uiv":0,
                "callbackJs":"play.callBack",
                "loadingurl":"http://tv.cztv.com/bluetv/vod/loading1229.swf",
                "playerid":10098,
                "profieldid":200096
                // "controlFlag":false
            }
        });
    }
}

function erweima(idInfo){
    var ew_img,ew_id;
    if(idInfo!=undefined){
        idInfo = JSON.parse(idInfo);
        ew_id=idInfo.id;
    }else{
        ew_id=101;
    }
    switch(ew_id){
        case 101 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 102 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 103 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 104 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 105 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 106 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 107 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 108 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 109 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 110 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 111 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
        case 112 :
            ew_img="http://ohudong.cztv.com/1/250746/images/"+ew_id+".png";
            break;
    }
    $('.erweima img').attr('src',ew_img);
}
