<template>
  <div class="hello">
    <ul>
      <li>
        <a href="javascript:void(0)" @click="back"><<返回</a>
      </li>
      <li v-for="(li,index) in lis">
        <router-link :to="{name:li.name,query: li.query}">{{ li.title }}</router-link>
      </li>
      <li class="download_li">
        <router-link :to="{name:'blueClothManufacturing',query: {pageId:'1002742258'}}"><i class="icon"></i>下载</router-link>
      </li>
      <li class="soucang_li">
        <router-link :to="{name:'blueClothManufacturing',query: {pageId:'1002742258'}}"><i class="icon"></i>收藏</router-link>
      </li>
      <li class="history_li">
        <router-link :to="{name:'blueClothManufacturing',query: {pageId:'1002742258'}}"><i class="icon"></i>历史</router-link>
      </li>
      <li class="personal_li">
        <router-link :to="{name:'blueClothManufacturing',query: {pageId:'1002742258'}}"><i class="icon"></i>我的</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lis: [
         {
           name:'index',
           query:{pageId:''},
           title:'推荐'
         },
         {
           name:'Variety',
           query:{pageId:'1002742257',cid:'11'},
           title:'综艺'
         },
         {
           name:'tvPlay',
           query:{pageId:'1002742227',cid:'2'},
           title:'电视剧'
         },
         {
           name:'Film',
           query:{pageId:'1002742255',cid:'1'},
           title:'电影'
         },
         {
           name:'Life',
           query:{pageId:'1001559701',cid:'13'},
           title:'生活'
         },
         {
           name:'Children',
           query:{pageId:'1002742206',cid:'5'},
           title:'少儿'
         },
         {
           name:'music',
           query:{pageId:'1002742185',cid:'9'},
           title:'音乐'
         },
         {
           name:'Journalism',
           query:{pageId:'1001633683',cid:'10'},
           title:'新闻'
         },
         {
           name:'Documentary',
           query:{pageId:'1002742188',cid:'16'},
           title:'纪录片'
         },
         {
           name:'blueClothManufacturing',
           query:{pageId:'1001561927',cid:'19'},
           title:'布噜制造'
         },
         {
           name:'car',
           query:{pageId:'1004099032',cid:''},
           title:'汽车'
         }
      ],
      i:-1
    }
  },
  methods:{
     back(){
        history.go(-1);
     },
     show(index){
       this.i = index
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  width: 100%;
  position: fixed;
  z-index: 999;
  background: #fff;
  list-style-type: none;
  padding: 5px 10px;
  margin:0 0 10px 0;
  /*border-bottom: 1px solid black;*/
  border-left: 1px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;
  box-shadow: 0px 3px 4px -5px;
}
li {
  height: 25px;
  line-height: 25px;
  text-align: center;
  display: inline-block;
  margin: 0 10px;
  position: relative;
}
a {
  color: #939393;
  font-size: 14px;
}
.icon{
  width: 16px;
  height: 16px;
  display: inline-block;
  background:url('../assets/icon.png') no-repeat;
  position: absolute;
  top: 3px;
  left: 5px;
  font-size: 14px;
}
.personal_li .icon{
  background-position: -42px -8px;
}
.personal_li:hover .icon{
  background-position: -42px -35px;
}
.history_li .icon{
  background-position: -73px -8px;
}
.history_li:hover .icon{
  background-position: -73px -35px;
}
.soucang_li .icon{
  background-position: -104px -7px;
}
.soucang_li:hover .icon{
  background-position: -104px -34px;
}
.download_li .icon{
  background-position: -134px -7px;
}
.download_li:hover .icon{
  background-position: -134px -34px;
}
.download_li,.soucang_li,.personal_li,.history_li{
  width: 50px;
  float: right;
  text-align: right;
  margin-left: 0px;
}
li:hover a{
  color: #1295db!important;
}
.hello{
  margin-top: 45px;
}
.hello>ul{
  display: block;
}
.router-link-active{
  color: #2d8cf0;
}
</style>
