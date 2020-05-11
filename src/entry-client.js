import { createApp } from './main.js'
const {app, router} = createApp()  //每次都新创建一个实例

//当路由准备后，告诉app在哪里挂载
router.onReady( () => {
    app.$mount('#app')
})













