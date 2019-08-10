/*start 首页*/
//设置活动的类型
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
/*end 首页*/


/*start 语言包*/
//选中语言
export const CHANGE_LANG = 'CHANGE_LANG'
//弹出模态框
export const SHOW_LANG_DIALOG = 'SHOW_LANG_DIALOG'
/*end 语言包*/

/*start 支付*/
//支付【动作】
export const PAY_MONEY = 'PAY_MONEY'
//支付详情
export const GET_PAY = 'GET_PAY'
//支付成功
export const PAY_SUCCESS = 'PAY_SUCCESS'
//支付失败
export const PAY_FAILED = 'PAY_FAILED'
/*end 支付*/


/*start 开单信息*/
//当前正在处理的订单
export const BILL_ACTIVE_ORDER_NO = 'BILL_ACTIVE_ORDER_NO'
//获得所有的开单信息
export const RECEIVE_BILLINFO_LIST = 'RECEIVE_BILLINFO_LIST'
//开单
//export const BILLING = 'BILLING'
//设置开单的状态
export const SET_BILLING_BEHAVIOR = 'SET_BILLING_BEHAVIOR'
/*end 开单信息*/


/*start 桌台的mutation*/
//设置桌台信息
export const SET_TABLE = 'SET_TABLE'
//获得所有楼层
export const RECEIVE_FLOORS = 'RECEIVE_FLOORS'
//设置激活的楼层
export const SET_ACTIVE_FLOOR = 'SET_ACTIVE_FLOOR'
//通过楼层获得桌台
export const FILTER_TABLE = 'FILTER_TABLE'
//选中桌子
export const CHANGE_TABLE = 'CHANGE_TABLE'
//获得桌子列表
export const RECEIVE_TABLES = 'RECEIVE_TABLES'
//设置桌台页操作按钮状态【能否可用】
export const SET_TABLE_OPERATE_BUTTONS_STATE = 'SET_TABLE_OPERATE_BUTTONS_STATE'
//选择座位
export const SELECT_SEAT = 'SELECT_SEAT'
/*end*/

/*start 订单的mutation*/
/*end*/

/*start 品项[items]*/
//接受品项
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
//过滤品项
export const GET_FILTER_ITEM_LIST = 'GET_FILTER_ITEM_LIST'
/*end*/

/*start 大类[TYPES]*/
//获得大类
export const RECEIVE_TYPES = 'RECEIVE_TYPES'
/*end*/

/*start 小类[subclass]*/
//获得小类
export const RECEIVE_SUBCLASS = 'RECEIVE_SUBCLASS'
//过滤小类
export const FILTER_SUBCLASS = 'FILTER_SUBCLASS'
/*end*/

/*start 购物车[cart]*/
//从购物车里面删除
export const REMOVE_TO_CART = 'REMOVE_TO_CART'
//设置购物车
export const SET_CART = 'SET_CART'
//添加到购物车
export const ADD_TO_CART = 'ADD_TO_CART'
//结账请求
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
//结账成功
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
//结账失败
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
/*end*/

/*start 规格*/
//得到规格
export const RECEIVE_SPEC = 'RECEIVE_SPEC'
//修改规格
export const SET_SPEC = 'SET_SPEC'
/*end 规格*/