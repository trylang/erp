import Vue from 'vue';
import Vuex from 'vuex';
import finance from './modules/finance';
import tenancy from './modules/tenancy';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        common,
        finance,
        tenancy
    }
});
