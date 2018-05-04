<template>
  <div class="hot_zongyi">
        <div class="title_model">
          热门综艺
        <span class="zongyi_model">
          <span :class="{choose:choose.ess}" @click="switch_tags(1)">二十四小时3</span>
          <span :class="{choose:choose.yk}" @click="switch_tags(2)">异口同声</span>
          <span :class="{choose:choose.yy}" @click="switch_tags(3)">演员的诞生</span>
        </span>
        </div>
      <div class="trumpChild" v-for="hotzongyi in hotzongyiLists" @click="goPlay(hotzongyi.vid,hotzongyi.type,hotzongyi.cid)">
        <img :src="hotzongyi.src">
        <p class="title">{{ hotzongyi.title }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index_child',
  data(){
    return {
      choose:{
        ess:true,
        yk:false,
        yy:false
      },
      hotzongyiLists: [],
    }
  },
  props: ['querys'],
  methods: {
    switch_tags(i){
      var _this=this;
      switch(i){
        case 1 :
           this.choose={
              ess:true,
              yk:false,
              yy:false
           }
           hotZongyi(3256)//二十四小时
           break;
        case 2 :
            this.choose={
              ess:false,
              yk:true,
              yy:false
           }
           hotZongyi(3327)//异口同声
           break; 
        case 3 :
            this.choose={
              ess:false,
              yk:false,
              yy:true
           }
           hotZongyi(3061)//演员的诞生
           break; 
      }
      function hotZongyi(pid){//二十四小时
        _this.$http.get('http://tv.cztv.com/block/'+pid+'.json')
        .then(function (res) {
          if(res.status==200){
            let o;
            let Lists = [];
            let block = res.data.blockContent;
            for(o in block){
              if(o<12){
                let b = {
                  src : block[o].tvPic,
                  title: block[o].shorDesc,
                  vid : block[o].content,
                  type: block[o].type,
                  cid : block[o].video.cid
                };
                Lists.push(b);
              }
            }
            _this.hotzongyiLists = Lists;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    goPlay(vid,type,cid){
      if(type==1||type==undefined){
        this.$router.push({path:'details',query:{vid:vid,cid:cid}});
      }else if(type==2){
        this.$router.push({path:'others',query:{pageId:vid}});
      }
    }
  },
  mounted(){
    let _this = this;//二十四小时
    _this.$http.get('http://tv.cztv.com/block/3256.json')
    .then(function (res) {
      if(res.status==200){
        let o;
        let Lists = [];
        let block = res.data.blockContent;
        for(o in block){
          if(o<12){
            let b = {
              src : block[o].tvPic,
              title: block[o].shorDesc,
              vid : block[o].content,
              type: block[o].type,
              cid : block[o].video.cid
            };
            Lists.push(b);
          }
        }
        _this.hotzongyiLists = Lists;
        bulu();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style>
  .hot_zongyi{
    width: 1200px;
    height: 365px;
    background: white;
    margin:30px auto;
    position: relative;
    padding: 15px;
  }
  .title_model{
    margin-bottom: 15px;
    font-size: 20px;
  }
  .title{
    color: #717170;
    font-size:14px; 
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    min-height: 21px;
    transition: 400ms;
  }
  .zongyi_model{
    display: inline-block;
    margin-left: 50px;
    font-size: 14px;
  }
  .zongyi_model>span{
    padding:0 5px;
    cursor: pointer;
  }
  .zongyi_model>span.choose{
    color: #2d8cf0;
  }
  .Trump,.hot_zongyi{
    width: 1200px;
    height: 365px;
    background: white;
    margin:30px auto;
    position: relative;
    padding: 15px;
  }
  .trumpChild{
    width: 183px;
    display: inline-block;
    padding:0 4px;
    margin-right: 4px;
    box-sizing: content-box;
    cursor: pointer;
  }
  .trumpChild img{
    width: 100%;
  }
</style>
