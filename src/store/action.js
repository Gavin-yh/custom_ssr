import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081'

export const getList = ({commit, state}) => {
    return axios.get('index/getList').then(res => {
        if(res.statusText === 'OK') {
            commit('LIST',res.data)
        }
    })
}
export const increment = ({commit}) => commit('increment')
export const decrement = ({commit}) => commit('decrement')