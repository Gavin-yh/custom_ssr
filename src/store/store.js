import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'
import * as mutations from './mutations'

let defaultState = {
    count: 0,
    list: []
}


//判断环境，因为这套代码可能也会在node环境下运行，node下没有window
const inBrowser = typeof window !== 'undefined'


// if(inBrowser || process.env.NODE_EVN === 'development) {
    Vue.use(Vuex)
// }


//前端的数据依赖于store
// 在服务端渲染的话，非常重要的步骤时，它需要知道你在浏览器里哪些东西需要去后台请求的。
//ssr一定要知道你哪些请求是异步的，后端要先把异步的请求执行完，这样就能同步的输出。
let  store  = (inBrowser && window.__INITIAL__STATE) || defaultState





export function createStore() {
    const store = new Vuex.Store({
        state,
        actions,
        getters,
        mutations

    })

    return store
}

