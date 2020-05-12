import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/index.vue'

Vue.use(Router)

//做服务端渲染，每一个也会用到这套东西，为了避免在全局行混用，将其设置成单例。
export function createRouter() {
    let router =  new Router({
        mode: 'history',   //==> 后端才能真的拿到路由
        routes: [{
            path: '/',
            component: Home
            
        }, 
        // {
        //     path: '/index',
        //     component: Index
        // }
    ]
    })
    return router
}