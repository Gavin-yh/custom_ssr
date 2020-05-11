import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './route/index'
import {createStore} from './store/store'

Vue.config.productionTip = false
//每一次都要构建一个新的实例，防止对全局变量造成影响，因为其后端请求的过程都要请求一次

export function createApp() {
  let router = createRouter()
  let store = createStore()

  let app = {
    router,
    store,
    render: h => h(App)   // 告诉对应的外边，去哪里渲染这个元素
  }
  return {app, router, store}
}
