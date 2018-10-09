import * as Type from '../types';
const state = {
    shopStatusNum:''
};
const getters = {
    shopStatusNum:state => state.shopStatusNum
};
const actions = {

};
const mutations = {
    [Type.SHOP_STATUS](state, types) {
        state.shopStatusNum = types;
    }
};
export default{
    state,
    getters,
    actions,
    mutations
}