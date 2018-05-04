<template>
    <div class="index_model_list" :style="styleObj">
	  	<!-- swiper -->
		<swiper :options="topSwiper">
		    <swiper-slide v-for="swiper in swiperData" :key="swiper.id"><img :src="swiper.src" @click="goPlay(swiper.id)"></swiper-slide>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		</swiper>
		<div class="list_model">
			<div class="model_child" v-for="(list,index) in dataLists" :class="{first:index==0,second:index==1}">
				<div v-if="index==0">
					<div class="title">{{ list.blockName }}</div>
					<div class="content">
						<div class="first_img">
							<div class="content_child" v-for="(child,i) in list.unitList" v-if="i==0" @click="goPlay(child.unitId,child.unitDetailType)">
								<img :src="child.unitImage">
								<p class="firstTitle">{{ child.unitTitle }}</p>
								<p class="lastTitle">{{ child.unitBrief }}</p>
							</div>
						</div>
						<div class="second_img">
							<div class="content_child" v-for="(child,i) in list.unitList" v-if="i>0&&i<5" @click="goPlay(child.unitId,child.unitDetailType)">
								<img :src="child.unitImage">
								<p class="firstTitle">{{ child.unitTitle }}</p>
								<p class="lastTitle">{{ child.unitBrief }}</p>
							</div>
						</div>
					</div>
				</div>
				<div v-else-if="index==1">
					<div class="title">{{ list.blockName }}</div>
					<div class="content">
						<div class="content_child" v-for="(child,i) in list.unitList" v-if="i<4" @click="goPlay(child.unitId,child.unitDetailType)">
							<img :src="child.unitImage">
							<p class="firstTitle">{{ child.unitTitle }}</p>
							<p class="lastTitle">{{ child.unitBrief }}</p>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="title">{{ list.blockName }}</div>
					<div class="content">
						<div class="content_child" v-for="(child,i) in list.unitList" v-if="i<5" @click="goPlay(child.unitId,child.unitDetailType)">
							<img :src="child.unitImage">
							<p class="firstTitle">{{ child.unitTitle }}</p>
							<p class="lastTitle">{{ child.unitBrief }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    	styleObj:{ height:parseInt(document.documentElement.clientHeight-66)+'px'},
        topSwiper: {
          autoplay:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperData :[],
        dataLists :[]
    }
  },
  methods: {
    getList(){
    	let _this = this;
	    let pageId = _this.$route.query.pageId;
	    console.log(pageId);
		_this.$http.get(_this.api+'/videoBlockList.do?pageId='+pageId+'&page=1&pageSize=20')
	    .then(function (res) {
	    	console.log(res);
	      if(res.status==200){
	        let list = res.data.content.list;
	        let o;
	        let json = [];
	        let mJson = [];
	        for(o in list){
	        	if(o==0){
	        		let p;
	        		let pjson;
	        		let ulist=list[o].unitList;
	        		for(p in ulist){
	        			pjson = {
	        				src:ulist[p].unitImage,
	        				title:ulist[p].unitTitle,
	        				id:ulist[p].unitId
	        			}
	        			json.push(pjson);
	        		}
	        		_this.swiperData = json;
	        	}else{
	        		mJson.push(list[o]);
	        		_this.dataLists = mJson;
	        	}
	        }
	      }
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
    },
    moveJson(data){
		var result = [];
		for(var i=1,len=data.length;i<len;i+=2){
		   result.push(data.slice(i,i+2));
		}
		return result;
	},
	goPlay(vid,type){
		if(type==1||type==undefined){
			this.$router.push({path:'details',query:{vid:vid,cid:this.$route.query.cid}});
		}else if(type==2){
			this.$router.push({path:'others',query:{pageId:vid}});
		}
	}
  },
  mounted(){
    this.getList();
  },
  watch: {
  	'$route' (to,from){
  		this.getList()
  	}
  }
}
</script>

<style>
	.index_model_list .swiper-container{
		width: 1200px;
		height: 350px;
	}
	.index_model_list .swiper-container img{
		width: 1200px;
		position: absolute;
		top: 50%;
		margin-top:-280px;
	}
	.index_model_list{
		position: relative;
		top: 30px;
		background: rgb(234,234,234);
		padding: 15px 0;
		overflow:auto;
	}
	.index_model_list .swiper-slide{
		height: 350px;
	}
	.list_model{
		width: 1200px;
		margin:0 auto;
		position: relative;
	}
	.list_model>.model_child{
		width: 100%;
		margin:30px auto;
		position: relative;
		background: #fff;
		padding:15px;
	}
	.model_child>div .title{
		font-size: 20px;
		margin-bottom: 15px;
	}
	.model_child.first{
		width: 800px;
		display: inline-block;
		margin-bottom: 0;
		float: left;
	}
	.model_child.second{
		width: 400px;
		display: inline-block;
		margin-bottom: 0;
		/*float: left;*/
	}
	.content_child{
		position: relative;
		display: inline-block;
	}
	.content_child img{
		width: 218px;
		/*height: 119px;*/
		margin:8px;
	}
	.list_model>.model_child.second,.list_model>.model_child.first{
		height: 376px;
	}
	.first .content>div.first_img{
		width: 392px;
		margin-right: 8px;
		float: left;
		position: relative;
	}
	.first .content>div.first_img img{
		height: 248px;
		width: 100%;
		margin:0;
	}
	.index_model_list .firstTitle{
		width: 185px;
		height: 21px;
		padding:0 8px;
		font-size: 14px;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.index_model_list .lastTitle{
		width: 185px;
		height: 21px;
		padding:0 8px 5px 8px;
		font-size: 12px;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.first .content_child img,.second .content_child img{
		width: 169px;
		height: 100px;
		margin: 0 8px;
	}
	.first_img .content_child{
		height: 290px;
	}
	.first .firstTitle,.second .lastTitle{
		width: 169px;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
</style>
