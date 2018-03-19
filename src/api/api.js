import $axios from './index'

/*export const getBuiding = () => {
    return $axios.get('/api/building')
};
export const getOneData = (id) => {
    return $axios.get(`/api/onedata?id=${id}`)
};
export const addBuilding = (data) => {
    return $axios.post('/api/addbuilding',data)
};
export const deleteData = (data) => {
    return $axios.post('/api/deldata',data)
};
export const updateData = (id,data) => {
    return $axios.post(`/api/update?id=${id}`,data)
};*/
export const getUserListData = (data) => {
    return $axios.get('/sys/user/list',data)
};