<template>
  <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
</template>
 
<script>
  export default {
    data() {
      return {
        playerOptions: {},
        m3u8Detail:[]
      }
    },
    // props: ['datas'],
    mounted() {
      let _this = this;
      // let videosid = _this.datas.id;
      let playerOptions;
      _this.$http.get(_this.playeraddr+'/newplayer/live/pc/config/101.json')
      .then(function (res) {
        console.log(res);
        if(res.status==200){
          let data = res.data;
          let o,urlM3u8,url =data.playurl.dispatch[0].url[0];
          _this.m3u8Detail = data;
          for(o in url){
            urlM3u8 = url[o][0].超清
          }
          console.log(urlM3u8);
          playerOptions = {
            autoplay: true,
            controls: false,
            techOrder: ['html5'],
            sourceOrder: true,
            html5: { hls: { withCredentials: false } },
            sources: [{
              withCredentials: false,
              type: 'application/x-mpegURL',
              src: 'http://tx.l.cztv.com/channels/lantian/channel01/720p.m3u8'
            }],
            // poster: 'http://img17.3lian.com/201612/16/88dc7fcc74be4e24f1e0bacbd8bef48d.jpg',
            notSupportedMessage: '此视频暂无法播放，请稍后再试'
          }
          _this.playerOptions = playerOptions;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    computed: {
      player() {
        // return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event
 
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
 
      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerWaiting(player) {
        console.log('wait...');
      },
      onPlayerLoadeddata(player){
        console.log('正在加载数据...',player)
      },
      onPlayerCanplay(player) {
        console.log('能够开始播放...',player);
      },
      onPlayerTimeupdate(player) {
        console.log('更新播放时间');
      },
      onPlayerPlaying(player) {
        console.log('正在播放.....');
      },
      onPlayerEnded(player) {
        console.log('播放结束.....');
      }
    }
  }
</script>
<style>
  .video-player,.video-player>div{
    width: 100%;
    height: 100%;
  }
</style>