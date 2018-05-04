import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import video from '@/components/video'
import listModel from '@/components/listModel/listModel'
import liveBroadcast from '@/components/liveBroadcast/liveBroadcast'
import details from '@/components/details/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video',
      component: video,
      redirect: '/index',
      children:[
      	{
      		path: '/index',//首页
      		name: 'index',
      		component: index
      	},
      	{
      		path: '/Variety',//综艺
      		name: 'Variety',
      		component: listModel
      	},
      	{
      		path: '/tvPlay',//电视剧
      		name: 'tvPlay',
      		component: listModel
      	},
      	{
      		path: '/Film',//电影
      		name: 'Film',
      		component: listModel
      	},
      	{
      		path: '/Life',//生活
      		name: 'Life',
      		component: listModel
      	},
      	{
      		path: '/Children',//少儿
      		name: 'Children',
      		component: listModel
      	},
      	{
      		path: '/music',//音乐
      		name: 'music',
      		component: listModel
      	},
      	{
      		path: '/Journalism',//新闻
      		name: 'Journalism',
      		component: listModel
      	},
      	{
      		path: '/car',//汽车
      		name: 'car',
      		component: listModel
      	},
      	{
      		path: '/Aerial',//航拍
      		name: 'Aerial',
      		component: listModel
      	},
      	{
      		path: '/Documentary',//纪录片
      		name: 'Documentary',
      		component: listModel
      	},
      	{
      		path: '/BlueClothManufacturing',//布噜制造
      		name: 'blueClothManufacturing',
      		component: listModel
      	},
      	{
      		path: '/details',//布噜制造
      		name: 'details',
      		component: details
      	},
      	{
      		path: '/others',//其他详情页面
      		name: 'others',
      		component: listModel
      	}
      ]
    },
    {
      path: '/liveBroadcast',
      name: 'liveBroadcast',
      component: liveBroadcast,
    }
  ]
})
