<template>
  <div class="index_child">
    <div class="title_model">{{ querys.name }}</div>
    <div class="ChildItems" v-for="i in ListsModel" @click="goPlay(i.vid,i.type,i.cid)">
      <img :src="i.src">
      <p class="title">{{ i.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index_child',
  data(){
    return {
      ListsModel:[],
    }
  },
  props: ['querys'],
  methods: {
    goPlay(vid,type,cid){
      if(type==1||type==undefined){
        this.$router.push({path:'details',query:{vid:vid,cid:cid}});
      }else if(type==2){
        this.$router.push({path:'others',query:{pageId:vid}});
      }
    }
  },
  mounted(){
    let _this = this;
    let id = _this.querys.id;
    _this.$http.get('http://tv.cztv.com/block/'+id+'.json')
    .then(function (res) {
      if(res.status==200){
        let o;
        let Lists = [];
        let block = res.data.blockContent;
        console.log(block);
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
        _this.ListsModel = Lists;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style>
  .index_child{
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
  .ChildItems{
    width: 183px;
    display: inline-block;
    padding:0 4px;
    margin-right: 4px;
    box-sizing: content-box;
    cursor: pointer;
  }
  .ChildItems img{
    width: 100%;
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
</style>
