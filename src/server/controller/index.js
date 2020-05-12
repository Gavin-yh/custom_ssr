const Router = require('koa-router')
const Vue = require('vue')
const {
    createBundleRenderer
} = require('vue-server-renderer')
const {
    join
} = require('path')
const fs = require('fs')
const serverBundle = require('../../../dist/assets/vue-ssr-server-bundle.json')
const template = fs.readFileSync(join(__dirname, 'index.html'))
const clientManifest = require('../../../dist/assets/vue-ssr-client-manifest.json')
// console.log(template.toString())
const router = new Router()

router.get('/', async (ctx, next) => {
    const context = {
        url: ctx.url
    }

    const renderer = createBundleRenderer(serverBundle, {
        runInNewContext: false, // 推荐
        template, // （可选）页面模板
        clientManifest // （可选）客户端构建 manifest
    })

    function createSSRStreamPromise() {
        return new Promise((resolve, reject) => {
            if(!renderer) {
                return ctx.body = "miss is error"
            }
            const ssrStream = renderer.renderToStream(context)
            console.log(ssrStream, 'dddddddd')
            ctx.status = 200
            ctx.type = 'html'
            ssrStream.on('error',err => {reject(err)}).pipe(ctx.res)
        })
    }

    await createSSRStreamPromise()
    
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    // renderer.renderToString(context, (err, html) => {
    //     // 处理异常……
    //     console.log(err)
    //     console.log(html)

    //     ctx.body = html
    // })
    // renderer.renderToString(app, (err, html) => {
    //     if (err) {
    //     ctx.body = '错误'
    //     return
    //     }
    //     ctx.body = `
    //     <!DOCTYPE html>
    //     <html lang="en">
    //         <head><title>Hello</title></head>
    //         <body>${html}</body>
    //     </html>
    //     `
    // })
})

router.get('/index/getList', (ctx, next) => {
    let json = {
        title: 'gavin',
        age: 12
    }
    ctx.set("Content-Type", "application/json")
    ctx.body = JSON.stringify(json)
})



module.exports = router