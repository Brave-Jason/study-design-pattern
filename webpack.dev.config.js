const path = require('path')
const HtmlWebpackPlguin = require('html-webpack-plugin')

module.exports = {
    entry:"./src/index.js",
    output:{
        path: __dirname,
        filename:'build/bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader:"babel-loader",
        }]
    },
    plugins:[
        new HtmlWebpackPlguin({
            template:'./index.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'./build'),
        open:true,
        port:9000,
    }
}