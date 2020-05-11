const argv = require('yargs-parser')(process.argv.slice(2))
const merge = require('webpack-merge')
const {
    join,
    resolve
} = require('path')
const _mode = argv.mode || 'server'
const {VueLoaderPlugin} = require('vue-loader')
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
let webpackConfig = {
    output: {
        path: join(__dirname, './dist/assets'),
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|git|eot|woff|woff2|ttf|svg|otf)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'images'
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                // extractCss: true
            }
        }, {
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader"]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue']
    }

}

module.exports = merge(webpackConfig, _mergeConfig)