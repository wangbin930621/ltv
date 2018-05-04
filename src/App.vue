<template>
  <div id="app">
    <ul class="padrent_nav" style="-webkit-app-region: drag;">
      <li class="video">
        <router-link :to="{name:'video'}" style="-webkit-app-region: no-drag;" >视频</router-link>
      </li>
      <li class="live">
        <router-link :to="{name:'liveBroadcast'}" style="-webkit-app-region: no-drag;">直播</router-link>
      </li>
      <li class="search_allnet">
        <div @mouseover="enter" @mouseout="leave"  style="-webkit-app-region: no-drag;">
          <input v-model="searchText" :placeholder="placeholder" :class="{'hover':hover}" @input="searchChange" @focus="searchFocus"  @blur="searchBlur"  style="-webkit-app-region: no-drag;"/>
          <span><i class="clear" @keyup="clearSearch">×</i><i class="Magnifier"  style="-webkit-app-region: no-drag;" @click="search"></i><p class="text" @click="search"  style="-webkit-app-region: no-drag;">搜全网</p></span>
          <div class="search_Model" v-if="searchModelBool" style="-webkit-app-region: no-drag;">
            <div>
              <p>搜索历史</p>
              <div class="history">
                <span>奔跑吧</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>奔跑吧</span>
              </div>
            </div>
            <div>
              <p>热门搜索</p>
              <div class="history">
                <span>奔跑吧</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>王牌对王牌</span>
                <span>奔跑吧</span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="guanbi">
        <i class="icon iconfont icon-guanbi" style="-webkit-app-region: no-drag;"></i>
      </li>
      <li class="minimum">
        <i class="icon iconfont icon-minimum" style="-webkit-app-region: no-drag;"></i>
      </li>
      <li class="zuixiaohua">
        <i class="icon iconfont icon-zuixiaohua" style="-webkit-app-region: no-drag;"></i>
      </li>
    </ul>
    <!-- <div class="drag" style="-webkit-app-region: drag;"></div> -->
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      placeholder:'奔跑吧兄弟',
      hover:false,
      searchText:'',
      searchModelBool:false
    }
  },
  methods: {
    videoClass(){
      this.video = true;
      this.live = false;
    },
    liveClass(){
      this.video = false;
      this.live = true;
    },
    enter(){
      this.hover = true;
    },
    leave(){
      this.hover = false;
    },
    searchChange(){
      // this.searchText=e.value;
      console.log(this.searchText);
    },
    clearSearch(){
      this.searchText='555';
    },
    search(){
      //搜索接口
      var _this=this;
      _this.$http.get(_this.api+'/search.do?keyword=%E5%A5%94%E8%B7%91%E5%90%A7&page=1&pageSize=20',{headers: {"Content-Type": "application/json"}})
        .then(function (res) {
          if(res.status==200){
            console.log(res.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    searchFocus(){
      this.searchModelBool=true;
    },
    searchBlur(){
      this.searchModelBool=false;
    }
  },
  mounted(){
    let _this=this;
    function getHotsearch(){
      _this.$http.get(_this.api+'/hotSearchKeywords.do')
        .then(function (res) {
          if(res.status==200){
            console.log(res.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getHotsearch();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.drag{
  width: 100%;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  -webkit-user-select: none;
}
.padrent_nav{
  width: 100%;
  height: 45px;
  position: fixed;
  top: 0;
  border:1px solid #d6d6d6;
  border-bottom:1px solid #cee6fa;
  z-index: 99999;
  background: #fff;

}
.padrent_nav li{
   height: 44px;
   float: left;
   display: block;
   position: relative;
   z-index: 999;
}
.video,.live{
   width: 90px;
   color: #2d8cf0;
   font-size: 18px;
   text-align: center;
   line-height: 45px;
   font-weight: bold;
}
.search_allnet{
  width: 50%;
  margin-left: 40px;
  position: relative;
}
.search_allnet>div{
  width: 100%;
  height: 45px;
  margin:0px auto;
}
.search_allnet input{
  width: 100%;
  display: block;
  height: 28px;
  background-color: rgb(237,237,237);
  border:0;
  border-radius: 15px;
  margin-top: 9px;
  outline:none;
  padding:10px;
  padding-right: 100px;
}
.search_allnet>div>span{
  width: 100px;
  height: 28px;
  display: inline-block;
  position: absolute;
  top: 9px;
  right: -5px;
  border-radius: 15px;
  cursor: pointer;
}
.search_allnet .clear{
  font-size: 20px;
  color: grey;
}
.clear:hover{
  color: black;
}
.search_allnet .Magnifier{
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 18px;
}
.Magnifier{
  background:url('assets/Magnifier.png') 100% 100% no-repeat;
  background-size: 100% 100%;
}
.search_allnet .text{
  display: inline-block;
  position: absolute;
  left: 44px;
  font-size: 12px;
  color: rgb(143,143,143);
  top: 6px;
}
.padrent_nav>li a{
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #4ca4ff;
}
.padrent_nav>li a.router-link-active{
  background: linear-gradient(to bottom,#0370c5 0,#4ca4ff 100%);
  color: white;
}
.hover{
  background-color: rgb(224,224,224)!important;
}
.search_Model{
  width: 82%;
  border:1px solid #e4e0e0;
  border-top: 0;
  background: #fff;
  margin-left: 15px;
  padding:5px;
}
.search_Model p{
  padding:5px 0 0 10px;
  color: black;
}
.search_Model .history>span{
  display: inline-block;
  font-size: 12px;
  padding:5px 10px;
  cursor: pointer;
  color: grey;
  transition: 400ms;
}
.search_Model .history>span:hover{
  color: #2d8cf0;
  transition: 400ms;
}
.zuixiaohua,.minimum,.guanbi{
  line-height: 45px;
  float: right!important;
  padding:0 10px;
}
li>.icon{
  color: #787878;
  font-size: 14px;
}
.guanbi>.icon{
  font-size: 12px;
  margin-right: 10px;
}
.zuixiaohua>.icon{
  font-size: 15px;
}
</style>
