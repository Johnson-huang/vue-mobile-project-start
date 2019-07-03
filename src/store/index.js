import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '@src/api/mock';

Vue.use(Vuex);

const state = {
  token: '' // token
};

// getters
const getters = {
  token: state => state.certStatus
};

// actions
const actions = {
  async handleLogin({ commit }, data) {
    const res = await login({
      mobile: data.mobile,
      smsCode: data.smsCode
    });

    switch (res.result) {
      case 0:
        commit('setToken', res.content);
        break;
      default:
        Vue.$vux.toast.text(res.resultMessage, 'middle');
        break;
    }
  }
};

// mutations
const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {},
  plugins: []
});
