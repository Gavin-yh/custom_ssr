const Koa = require('koa')

const router = require('./controller/index')
const koa = new Koa();

koa.use(router.routes())


koa.listen(8080)





