const path = require('path')
const rootPath = path.join(__dirname, '..')
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin')
module.exports = {
    entry:[rootPath + '/src/webApp/entry-server.js'],
    target:'node',
    output: {
        //告诉node 用Node-style的风格
        libraryTarget: 'commonjs2',
         
    },
    plugins: [
        new vueSSRServerPlugin()   // 会将服务端的列表生成出来  vue-ssr-server-bundle.json
    ]
}


//文件经过处理后，会放到后台去。