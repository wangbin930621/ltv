// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import "./assets/FontIcon/iconfont.css"
import axios from 'axios'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
Vue.prototype.$http = axios
Vue.prototype.hd = 'http://dhudong.cztv.com/'  //   /dhudong
Vue.prototype.playeraddr = 'http://player.cztv.com/' //直播json域名  /player
Vue.prototype.aliM3u8 = 'http://ali.l.cztv.com/' //ali直播流域名  /aliM3u8
Vue.prototype.api = '/api' //ali域名  /api http://proxy.app.cztv.com/

Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { 
  	App
  },
  template: '<App/>',
})
