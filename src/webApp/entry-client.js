import { createApp } from './main.js'
const {app, router} = createApp()  //每次都新创建一个实例
console.log('前端', app)
//当路由准备后，告诉app在哪里挂载
router.onReady( () => {
    console.log('entyr-client', app)
    app.$mount('#app')

})













