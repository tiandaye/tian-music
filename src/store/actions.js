import * as types from './mutation-types'

export const setBillingBehavior = ({ commit }, flag) => {
  commit(types.SET_BILLING_BEHAVIOR, flag)
}
