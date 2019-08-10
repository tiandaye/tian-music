import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'


import order from './modules/order'
Vue.use(Vuex)

//调试
//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
  }
  //调试
  //,
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
