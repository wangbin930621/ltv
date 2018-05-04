<template>
  <div class="model" :style="{height:styleHeight}">
      <div class="flashPosition" :style="{width:styleWidth,height:styleHeight}">
          <livePlayer></livePlayer>
      </div>
      <Programe></Programe>
  </div>
</template>

<script>
import Programe from '@/components/liveBroadcast/Programes'
import livePlayer from '@/components/liveBroadcast/livePlayer'

export default {
  name: 'liveBroadcast',
  data(){
    return {
        styleWidth: parseInt(document.documentElement.clientWidth-250)+'px',
        styleHeight: parseInt(document.documentElement.clientHeight-45)+'px',
    }
  },
  methods: {
    changeSize() {
      let _this=this;
      _this.styleWidth=parseInt(document.documentElement.clientWidth-250)+'px';
      _this.styleHeight=parseInt(document.documentElement.clientHeight-45)+'px';
    }
  },
  mounted(){
    let _this=this;

    window.onresize = () => {
      return (() => {
          _this.styleWidth=parseInt(document.documentElement.clientWidth-250)+'px';
          _this.styleHeight=parseInt(document.documentElement.clientHeight-45)+'px';
      })()
    }
  },
  components:{
    'Programe':Programe,
    'livePlayer':livePlayer
  }
}
</script>

<style>
  .model{
    width: 100%;
    min-width: 1200px;
    margin:45px auto 0 auto;
    background: #444444;
  }
  .flashPosition{
    height: 100%;
  }
</style>
