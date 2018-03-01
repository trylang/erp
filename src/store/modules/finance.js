import * as api from '../../utils/rest/finance';
import { _replace, _remove, _returnPromise } from '../../utils';
// initial state
const state = {
  accountGroups: []
};

// getters
const getters = {
  accountGroups: state => state.accountGroups
}

// mutations
const mutations = {
  SET_ACCOUNTGROUPS (state, list) {
    state.accountGroups = list;
  },
  ADD_ACCOUNTGROUPS (state, params) {
    state.accountGroups.unshift(params);
  },
  DEL_ACCOUNTGROUPS(state, id) {
    _remove('id', id, state.accountGroups);
  },
  UPDATE_ACCOUNTGROUPS(state, params) {
    _replace('id', state.accountGroups, params);
  }
}

// actions
const actions = {
  getAccountGroups({ commit }, param) {
    _returnPromise(api.queryAccountgroups, {param}, (returnObj) => {
      commit('SET_ACCOUNTGROUPS', returnObj);
    });
  },
  addAccountGroup({ commit }, param) {
    _returnPromise(api.addAccountgroup, {param}, (returnObj) => {
      commit('ADD_ACCOUNTGROUPS', returnObj);
    });
  },
  delAccountGroup({ commit }, id) {
    _returnPromise(api.addAccountgroup, {path: id}, () => {
      commit('DEL_ACCOUNTGROUPS', id);
    });
  },
  updateAccountGroup({ commit }, {id, param}) {
    _returnPromise(api.updateAccountgroup, {path: id, param}, (returnObj) => {
      commit('UPDATE_ACCOUNTGROUPS', returnObj);
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};