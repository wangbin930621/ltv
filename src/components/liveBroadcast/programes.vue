<template>
  <div class="leftModel">
      <div class="list_title">
        <div class="programs" :class="{active:listStyle}" @click="changeStyleTrue">节目单</div>
        <div class="channels" :class="{active:!listStyle}" @click="changeStyleFalse">选台</div>
      </div>
      <div class="list_detail" :style="{height:styleHeight-45}">
        <div class="p_detail" v-show="toggleList">
          <div class="p_child" v-for="p in programsList" :key="p.id" :class="{active:p.program_status==2}">
            <span class="title">{{ p.program_title }}</span>
            <span class="time">{{ new Date(p.play_time) }}</span>
          </div>
        </div>
        <div class="c_detail" v-show="!toggleList" >
          <div class="c_child" v-for="(c, index) in channelsList" :key="c.id" :class="{active:c.id==26}">
            <span class="img"><img :src="c.logo" /></span>
            <span class="title">{{ c.station_name }}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'liveBroadcast',
  data(){
    return {
        styleWidth: parseInt(document.documentElement.clientWidth-250)+'px',
        styleHeight: parseInt(document.documentElement.clientHeight-45)+'px',
        listStyle:true,
        toggleList:true,
        programsList:[],
        channelsList:[]
    }
  },
  methods: {
    changeSize() {
      let _this=this;
      _this.styleWidth=parseInt(document.documentElement.clientWidth-250)+'px';
      _this.styleHeight=parseInt(document.documentElement.clientHeight-45)+'px';
    },
    changeStyleTrue() {
      this.listStyle = true;
      this.toggleList= true;
    },
    changeStyleFalse() {
      this.listStyle = false
      this.toggleList= false;
    },
    standardTime(now){
      var year=now.getFullYear(); 
      var m = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
      var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      var hours= now.getHours()<10 ? "0"+ now.getHours(): now.getHours();
      var fen= now.getMinutes()<10 ? "0"+ now.getMinutes(): now.getMinutes();
      var miao= now.getSeconds()<10? "0"+ now.getSeconds(): now.getSeconds();
      return year+"-"+m+"-"+day+" "+hours+":"+fen+":"+miao; 
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
    function getProgrames(_sid,_date){
      _this.$http.get(_this.hd+'/stations/programInfo', {
          params: {
            site_id:12,
            channel_id:1,
            station_id:_sid,
            date:_date
          }
        })
        .then(function (res) {
          if(res.code="200"){
            let list = res.data.content.list[0].list;
            _this.programsList = list;
            // console.log(list);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    let date = _this.standardTime(new Date()).split(' ')[0];
    getProgrames(26,date);


    function getChannels(){
      _this.$http.get(_this.hd+'/stations/index', {
          params: {
            site_id:12,
            channel_id:1,
            type:'tv',
            number:5
          }
        })
        .then(function (res) {
          if(res.code="200"){
            let list = res.data.content.list;
            _this.channelsList = list;
            console.log(list);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getChannels();
  }
}
</script>

<style>
  .leftModel{
    width: 250px;
    height: 100%;
    position: absolute;
    top: 45px;
    right: 0;
  }
  .list_title{
    position: relative;
    width: 100%;
    height: 45px;
    background: #333333;
  }
  .list_title>div{
    float: left;
    width: 80px;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .list_title>div.active{
    background: #444444;
  }
  .list_detail{
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
  }
  .list_detail>div{
    width: 100%;
  }
  .p_child{
    width: 100%;
    height: 45px;
    cursor: pointer;
    margin:5px 0;
  }
  .p_child span,.c_child>span{
    display: block;
    float: left;
    color: white;
    height: 100%;
  }
  .p_child .title,.c_child .title{
    width: 155px;
    height: 45px;
    line-height: 45px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 5px;
  }
  .p_child .time{
    width: 75px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }
  .c_child{
    width: 100%;
    height: 60px;
    cursor: pointer;
    margin:5px 0;
  }
  .c_child img{
    width: 60px;
  }
  .c_child .title{
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .p_child.active,.c_child.active{
    border-left: 2px solid #4e9dff;
    background: #3a3939;
  }
</style>
