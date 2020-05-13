import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081'

export const getList = ({commit, state}) => {
    return axios.get('index/getList').then(res => {
        console.log(res , '请求成功')
        if(res.statusText === 'OK') {
            commit('LIST',res.data)
        }
    })
}

export const increment = ({commit}) => commit('INCREMENT')
export const decrement = ({commit}) => commit('DECREMENT')