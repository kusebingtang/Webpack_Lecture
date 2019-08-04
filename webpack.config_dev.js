'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle : './src/index.js',
        search : './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',

    module: { // 配置所有第三方loader 模块的
        rules: [ // 第三方模块的匹配规则
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            { test: /\.css$/, use: [  // 处理 CSS 文件的 loader
                'style-loader','css-loader'
            ]},
            { test: /\.less$/, use: [  // 处理 less 文件的 loader
                'style-loader','css-loader','less-loader'
            ]},
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    }

};
