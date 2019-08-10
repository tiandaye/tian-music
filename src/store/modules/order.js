import * as types from '../mutation-types'

// initial state
const state = {
  billing_behavior: '0',//开单后点菜,开单后跳到主界面
  activeOrderNo: ''//当前处理的订单号
}

// mutations
const mutations = {
  //正在处理的的订单号。【激活的购物车】
  [types.BILL_ACTIVE_ORDER_NO] (state, order_no) {
    state.activeOrderNo = order_no
  },
  //修改开单后的状态。【开单后点菜【0】，还是返回主界面【1】】
  [types.SET_BILLING_BEHAVIOR] (state, flag) {
    console.log('SET_BILLING_BEHAVIOR')
    console.log(flag)
    state.billing_behavior = flag
  }
}

export default {
  state,
  mutations
}