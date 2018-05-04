<template>
    <div class="details" :style="styleObj">
       <div class="videoModel" :style="{width:styleWidth,height:styleHeight}">
          <player :datas="{'id':videoId}"></player>
       </div>
       <div class="toolBar" :style="{width:styleWidth}">
          <div class="PlayOrPause">
            <i class="icon iconfont icon-bofang" v-if="PlayBool"></i>
            <i class="icon iconfont icon-zanting" v-if="PauseBool"></i>
          </div>
          <div class="nextSet">
            <i class="icon iconfont icon-bofangqi-xiayiji"></i>
          </div>
          <div class="videoTime">
            <span>00:20:00</span> / <span>01:20:30</span>
          </div>
          <div class="ChangeFlow" @mouseover="qxdStatus" @mouseout="qxdStatus">
            <span>清晰度</span>
            <div v-if="qxd"> <!-- v-if="qxd" -->
              <div class="ttt">- 清晰度 -</div>
              <p @click="ChangeFlows(2)">超清</p>
              <p @click="ChangeFlows(1)">高清</p>
              <p @click="ChangeFlows(0)">标清</p>
            </div>
          </div>
          <!-- <div class=""></div> -->
       </div>
       <div class="container" :style="styleObj">
          <OV :datas="{'id':videoId}"></OV>
       </div>
    </div>
</template>

<script>
import player from '@/components/details/player/player'
import Ordinary_Variety from '@/components/details/type/Ordinary_Variety'
export default {
  name: 'App',
  data(){
    return {
      styleObj:{ height:parseInt(document.documentElement.clientHeight-80)+'px'},
      styleWidth: parseInt(document.documentElement.clientWidth-250)+'px',
      styleHeight: parseInt(document.documentElement.clientHeight-140)+'px',
      PlayBool: false,
      PauseBool: true,
      qxd:false,
      videoId: this.$route.query.vid
    }
  },
  methods: {
    qxdStatus(){
      let _this = this;
      _this.qxd = !_this.qxd;
    },
    ChangeFlows(i){
      let _this = this;
      _this.m3u8 = _this.m3u8Detail.playurl.dispatch[i].url[0].ali;
      _this.initPlayer(_this.m3u8);
    }
  },
  components: {
    'player': player,
    'OV': Ordinary_Variety
  },
  mounted(){
      let _this = this;
      window.onresize = () => {
        return (() => {
            _this.styleWidth=parseInt(document.documentElement.clientWidth-250)+'px';
            _this.styleHeight=parseInt(document.documentElement.clientHeight-140)+'px';
            _this.styleObj={ height:parseInt(document.documentElement.clientHeight-80)+'px'};
        })()
      }
  },
  beforeRouteLeave(to,from,next){
    if(window.isVideoBreak){
       clearTimeout(window.isVideoBreak);
    }
    $('.videoModel').empty();
    next();
  }
}
</script>

<style>
  .details{
    width: 100%;
    position: relative;
    top:35px;
  }
  video{
    width: 100%;
    height: 100%;
  }
  .toolBar{
    height: 60px;
    background: rgb(55,55,66);
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .container{
    width: 250px;
    position: absolute;
    right: 0;
    top: 0;
    background: rgb(38,38,43);
  }
  .toolBar>div{
    width: 40px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .icon{
    cursor: pointer;
    font-size: 20px;
    color: #fff;
  }
  .icon:hover{
    color: #4ca4ff;
  }
  .PlayOrPause{
    margin-left: 30px;
  }
  .nextSet>.icon{
    font-size: 29px;
  }
  .videoTime{
    width: 118px!important;
    font-size: 13px;
    margin-left: 10px;
    color: white;
  }
  .PlayOrPause,.nextSet,.videoTime{
    float: left;
  }
  .ChangeFlow{
    float: right;
    background:rgb(33,33,40);
    color: #fff;
    width: auto!important;
    height: auto!important;
    padding:15px;
    line-height: 0!important;
    margin-top: 15px;
    margin-right: 70px;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
  }
  .ChangeFlow>span:hover{
    color: #4ca4ff;
  }
  .ChangeFlow>span{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .ChangeFlow>div{
    width: 110px;
    height: 135px;
    position: absolute;
    top: -146px;
    left: -25px;
    background: rgb(33,33,40);
  }
  .ttt{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .ChangeFlow p{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .ChangeFlow p:hover{
    color: #4ca4ff;
  }
</style>
