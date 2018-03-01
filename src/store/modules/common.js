import * as Type from '../types';

const state = {
    menuActiveIndex:''
};
const getters = {
    menuActiveIndex:state => state.menuActiveIndex
};
const actions = {

};
const mutations = {
    [Type.MENU_ACTIVE](state, types) {
        state.menuActiveIndex = types;
    }
};
export default{
    state,
    getters,
    actions,
    mutations
}