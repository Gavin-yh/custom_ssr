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
const template = fs.readFileSync(join(__dirname, 'index.html'), "utf-8")
const clientManifest = require('../../../dist/assets/vue-ssr-client-manifest.json')

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
            console.log('s')
            renderer.renderToString(context, (err, html) => {
                if(!err) {
                    resolve(html)
                }
            })
        })
    }
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = await createSSRStreamPromise()
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