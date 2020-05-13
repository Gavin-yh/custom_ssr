import {createApp} from './main'
//后端也要用这一套
//核心两个
//  抽取每一个路由，然后去找对应的组件  /index   ==> 对应到router下的component  (每次在访问后端真正路由时，一定要将当前地址传递过来)
//  component 处理异步的数据，然后组装成一个页面，吐出来给浏览器


//要求返回一个promise
export default context => {
    console.log(context , '进来了')

    return new Promise((resolve, reject) => {
        const {app, router, store} = createApp()   //这些东西是给node用的， node会将后台真实的路由返过来。
        // 则前端的路由不能用hash, 要用history


        //router是前端的路由，
        //context.url是后台给你的路由
        //这样子前后端路由就联动了。
        router.push(context.url)

        router.onReady(() => {
            //将路由对应的模板找出来
            const matchComponents = router.getMatchedComponents()
            
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchComponents.length) {
                return reject({ code: 404 })
            }

            Promise.all(matchComponents.map((component) => {
                if(component.asyncData) {
                    return component.asyncData({store})
                }
            })).then(() => {
                //读取完,将数据交个后台
                context.state = store.state
                console.log(context)
                resolve(app)
            })
        })
    })
}











