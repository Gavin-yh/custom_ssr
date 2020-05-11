const path = require('path')
const rootPath = path.join(__dirname, '..')
const vueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    entry:[rootPath + '/src/entry-client.js'],
    plugins: [
        new vueSSRClientPlugin()   // 会将前端的列表生成出来
    ]
}




