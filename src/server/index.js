const Koa = require('koa')


//直接拿过来，controller暂时没用
// const router = require('./controller/index')
const koa = new Koa();

const {
    createBundleRenderer
} = require('vue-server-renderer')
const {
    join
} = require('path')
const fs = require('fs')
const serverBundle = require('../../dist/assets/vue-ssr-server-bundle.json')
const template = fs.readFileSync(join(__dirname, 'index.html'), "utf-8")
const clientManifest = require('../../dist/assets/vue-ssr-client-manifest.json')


koa.use(async (ctx, next) => {
    let arr = ctx.url.split('.')
    let last = arr.pop()
    if (last === 'js' || last === "css") {
        ctx.body = fs.readFileSync(join(__dirname, `../../dist/assets${ctx.url}`))
    } else {
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
                if (!renderer) {
                    return ctx.body = "miss is error"
                }
                console.log('sfffdfff')
                renderer.renderToString(context, (err, html) => {
                    console.log(err)
                    if (!err) {
                        resolve(html)
                    }
                })
            })
        }
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = await createSSRStreamPromise()
    }
})


koa.listen(8080)