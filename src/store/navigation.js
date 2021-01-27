export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
  //state를 변경하기 위해서는 mutations에서 변경해야함
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    onNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: true
      })
    },
    offNav ({ commit }, name) {
      commit('updateState', {
        [`isShow${name}`]: false
      })
    }
  }
}


