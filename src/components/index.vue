<template>
  <div class="index_model" :style="styleObj">
  	  <!-- swiper -->
	  <swiper :options="topSwiper">
	    <swiper-slide v-for="swiper in swiperData" :key="swiper.id"><img :src="swiper.src"></swiper-slide>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	  </swiper>
	  <div class="todayHots_live">
		<div class="todayHots">
			<div class="title_model">今日热点</div>
			<div class="hots_child" v-for="hot in hotLists"  @click="goPlay(hot.vid,hot.type,hot.cid)">
				<img :src="hot.src">
				<p class="title">{{ hot.title }}</p>
			</div>
		</div>
		<div class="live_car">
			<div class="title_model">直通车</div>
			<video src="../assets/video/yxqc.mp4" autoplay loop controls></video>
			<span></span>
		</div>
	  </div>
	  <HotZongyi></HotZongyi>
	  <Item :querys="{'id':3256,'name':'王牌对王牌'}"></Item>
	  <Item :querys="{'id':1157,'name':'音乐'}"></Item>
	  <Item :querys="{'id':1120,'name':'布噜制造'}"></Item>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import index_child from '@/components/index_child'
import hotzongyi from '@/components/hotzongyi'
  export default {
  	name:"index",
    data() {
      return {
      	videoSrc: '',
      	choose:{
      		ess:true,
      		yk:false,
      		yy:false
      	},
      	styleObj:{ height:parseInt(document.documentElement.clientHeight-66)+'px'},
        topSwiper: {
          autoplay:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperData: [
        	{src:'http://i1.iblue.com/cztv/cms/2018/03/16/fb82e5de6dd74c338958750677bbb4b51512696011491546800.jpg'},
        	{src:'http://i1.iblue.com/cztv/cms/2018/03/16/35aa35e5dffb49b5aceceffb84d369428702913508704410236.jpg'},
        	{src:'http://i1.iblue.com/cztv/cms/2018/03/19/19754cd057004c50abee7d5562f8a1716280521308767291455.jpg'},
        	{src:'http://i1.iblue.com/cztv/cms/2018/03/19/0ae8f9cc501c4ce5bca2fd47112c51272904779903858132079.jpg'},
        	{src:'http://i1.iblue.com/cztv/cms/2018/03/19/88418eb2645842b8b87bb00a1226782e7729304593519368485.jpg'}
        ],
        hotLists: [],
      }
    },
    methods: {
    	goPlay(vid,type,cid){
	      if(type==1||type==undefined){
	        this.$router.push({path:'details',query:{vid:vid,cid:cid}});
	      }else if(type==2){
	        this.$router.push({path:'others',query:{pageId:vid}});
	      }
	    }
    },
    mounted() {
    	var _this = this;
    	function hots(){
	        _this.$http.get('http://tv.cztv.com/block/1107.json')
	        .then(function (res) {
	          if(res.status==200){
	            let o;
	            let Lists = [];
	            let block = res.data.blockContent;
	            for(o in block){
	              if(o<8){
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
	            _this.hotLists = Lists
	          }
	          trump();
	        })
	        .catch(function (error) {
	          console.log(error);
	        });
        };
        hots();
    },
    components: {
	    // <my-component> 将只在父组件模板中可用
	    'Item': index_child,
	    'HotZongyi': hotzongyi
	  }
  }
</script>
<style scoped>
	.swiper-container{
		width: 1200px;
	}
	img{
		width: 1200px;
	}
	.index_model{
		position: relative;
		top: 30px;
		background: rgb(234,234,234);
		padding: 15px 0;
		overflow:auto;
	}
	.todayHots_live{
		width: 1200px;
		height: 355px;
		background: white;
		margin:30px auto;
		position: relative;
		padding: 15px;
	}
	.todayHots,.live_car{
		float: left;
		min-height: 100px;
	}
	.todayHots{
		width: 780px;
		margin-right: 15px;
	}
	.todayHots_live .live_car{
		width: 370px;
	}
	.todayHots_live .live_car video{
		width:100%;
		height: 246px;
		display: block;
		background: black;
		/*object-fit: cover;*/
	}
	.todayHots_live .live_car span{
		width: 100%;
		height: 35px;
		display: block;
		background: grey;
	}
	.hots_child{
		width: 183px;
		margin-right: 4px;
		position: relative;
		margin-bottom: 15px;
		cursor: pointer;
		padding: 0 4px;
		display: inline-block;
		box-sizing: content-box;
	}
	.hots_child img{
		width: 100%;
		display: block;
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
	.title_model{
		margin-bottom: 15px;
		font-size: 20px;
	}
</style>

