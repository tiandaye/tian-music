// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueVideoPlayer from 'vue-video-player'
import Vuex from 'vuex'
import * as filters from './util/filters'

// this.$http就是axios
Vue.prototype.$http = axios

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios);

// Vuex 进行状态管理
Vue.use(Vuex);

// mount with global [播放器]
Vue.use(VueVideoPlayer)

const store = new Vuex.Store({
  state: {
    //音乐数据
    musicData: [],
    //皮肤颜色
    skinColor: localStorage.skinColor || '#1B5E20',//#B72712 红色
    //是否显示主界面
    isShowIndex: true,
    //是否播放
    isPlaying: false,
    isAnimation: false,
    // 是否显示我的
    isShowAsideMenu: false,
    // 是否显示主音乐
    isShowMiniMusic: false,
    // 是否显示关于
    isShowAbout: false,
    linkBorderIndex: '',
    DOM: {},
    audio: {
      // 歌曲名
      name: '',
      // 链接
      src: '',
      // 图片
      musicImgSrc: '',
      index: 0
    }
  },
  mutations: {
    //删除歌曲
    del(state, index) {
      if (state.musicData.length === 0) {
        return;
      }
      console.log('del')
      state.musicData.splice(index, 1);
    },
    //播放/暂停
    play(state, flag) {
      state.isPlaying = flag;
    },
    //添加音乐
    addMusic(state, payload) {
      for (let music of state.musicData) {
        if (JSON.stringify(music) === JSON.stringify(payload)) {
          return;
        }
      }
      state.musicData.unshift(payload);
    },
    //切换音乐
    toggleMusic(state, index) {
        //更改网页title - tian
        document.title = state.musicData[index].name

        state.audio.name = state.musicData[index].name;
        state.audio.src = state.musicData[index].src;
        state.audio.musicImgSrc = state.musicData[index].musicImgSrc;
        state.audio.index = index;
    },
    //播放音乐
    playMusic(state, payload) {
      //更改网页title - tian
      document.title = payload.name

      state.audio.name = payload.name;
      state.audio.src = payload.src;
      state.audio.musicImgSrc = payload.imgSrc;
      state.isPlaying = true;
    },
    findDOM(state, payload) {
      state.DOM[payload.name] = payload.dom;
    },
    //是否显示主界面
    showIndex(state, flag) {
      state.isShowIndex = flag;
    },
    // 是否显示我的
    showAsideMenu(state, flag) {
      state.isShowAsideMenu = flag;
    },
    // 显示主音乐
    showMiniMusic(state, flag) {
      state.isShowMiniMusic = flag;
    },
    // 实现关于
    showAbout(state, flag) {
      state.isShowAbout = flag;
    },
    changeLinkBorderIndex(state, index) {
      state.linkBorderIndex = index;
    },
    // 修改皮肤
    changeSkinColor(state, color) {
      state.skinColor = color;
    }
  },
  actions: {
    // 获得localStorage中的音乐数据
    getData({ commit,state }) {
      if (localStorage.musics !== '[]' && localStorage.musics) {
        state.musicData = JSON.parse(localStorage.musics);
        return;
      }
      return new Promise((resolve, reject) => {
        Vue.axios.get('/api/music-data')
            .then (res => {
              if (res.data.errno === 0) {
                state.musicData = res.data.musicData;
                localStorage.musics = JSON.stringify(state.musicData);
              }
            })
            .then(() => {
              commit('toggleMusic',0)
            });
        resolve();
      });
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
