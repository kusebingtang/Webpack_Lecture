'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        bundle : './src/index.js',
        search : './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',

    module: { // 配置所有第三方loader 模块的
        rules: [ // 第三方模块的匹配规则
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            // { test: /\.css$/, use: [  // 处理 CSS 文件的 loader
            //     'style-loader','css-loader'
            // ]},
            // { test: /\.less$/, use: [  // 处理 less 文件的 loader
            //     'style-loader','css-loader','less-loader'
            // ]},
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        // loader: 'url-loader',options: {limit: 10240 }
                        loader: 'file-loader',  //图⽚的⽂件指纹设置  设置 file-loader 的 name，使⽤ [hash]
                        options: {
                            name: '[name]_[hash:8].[ext]'
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
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
    ],
};
