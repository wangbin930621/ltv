<template>
  <div class="relative_model">
    <div class="play_choose">
      <div :class="{'choose':detailsBool}" @click="palyBool(1)">播放列表<span v-show="detailsBool"></span></div>
      <div :class="{'choose':!detailsBool}"  @click="palyBool(2)">评论<span v-show="!detailsBool"></span></div>
    </div>
    <div class="lists" v-show="detailsBool">
      <div class="title">{{ info.videoTitle }}</div>
    </div>
    <div class="comments" v-show="!detailsBool">评论</div>
  </div>
</template>
 
<script>
  export default {
    data() {
      return {
        detailsBool:true,
        info:[],
      }
    },
    props: ['datas'],
    mounted() {
      let _this = this;
      let videosid = _this.$route.query.vid;
      _this.$http.get(_this.api+'/getVODDetail.do?videoId='+videosid)
      .then(function (res) {
        console.log(res);
        if(res.status==200){
          let data = res.data.content.list[0];
          let infos = {
            cid : _this.$route.query.cid,
            vid : _this.$route.query.vid,
            playTimes: data.playTimes,
            publishYear : data.publishYear,
            tvChannelName: data.tvChannelName,
            videoBrief : data.videoBrief,
            videoChannelId : data.videoChannelId,
            videoId : data.videoId,
            videoShareUrl: data.videoShareUrl,
            videoTitle : data.videoTitle,
            videoTypesDesc : data.videoTypesDesc,
            ablumId : data.ablumId
          } 
          _this.info = infos;
          console.log(_this.info);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    computed: {
      
    },
    methods: {
      palyBool(i){
        let _this = this;
        i == 1 ? _this.detailsBool = true : _this.detailsBool = false;
      }
    } 
  }
</script>
<style>
  .relative_model{
    width: 100%;
    height: 100%;
  }
  .play_choose>div{
    display: inline-block;
    padding:10px 10px;
    font-size: 13px;
    cursor: pointer;
    color: #979797;
  }
  .play_choose>div:first-child{
    margin-left: 10px;
  }
  .play_choose>div>span{
    height: 3px;
    background: rgb(255,89,69);
    display: block;
    border-radius: 15px;
  }
  .play_choose>div.choose{
    color: rgb(255,89,69);
  }
  .play_choose>div:first-child span{
    width: 26px;
    margin-left: 13px;
    margin-top: 5px;
  }
  .play_choose>div:last-child span{
    width: 20px;
    margin-left: 3px;
    margin-top: 5px;
  }
  .title{
    /*width: 200px;*/
    font-size: 15px;
    color: white;
    padding: 0 15px;
  }
</style>