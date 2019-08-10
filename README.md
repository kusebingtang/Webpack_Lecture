#### webpack 的安装
-----
```shell
npm init -y #使用默认选项
npm install webpack webpack-cli --save-dev

```

* 检查是否安装成功:
```shell
./node_modules/.bin/webpack -v
```

#### 通过 npm script 运⾏行行 webpack

通过 npm run build 运⾏行行构建
原理理:模块局部安装会在 node_modules/.bin ⽬目录创建软链接
"scripts": {
"build": "webpack" 
},

---

#### React JSX 解析
```shell
npm install react react-dom @babel/preset-react -D
```

babelrc 增加react配置
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
    ],
}


#### 资源解析:解析 CSS
```shell
npm install style-loader css-loader -D
```

* css-loader ⽤用于加载 .css ⽂文件，并且转换成 commonjs 对象
* style-loader 将样式通过 <style> 标签插⼊入到 head 中

---
#### 解析 Less 和 SaSS
```shell
npm install less less-loader -D
```

* less-loader ⽤用于将 less 转换成 css

配置less解析

```js
{ test: /\.less$/, use: [  // 处理 less 文件的 loader
                'style-loader','css-loader','less-loader'
             ]},
```



####  资源解析：解析字体
```shell
npm install file-loader
```

配置
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }

资源解析：解析图⽚ 使⽤ url-loader
```shell
npm install url-loader
```


#### CSS 的⽂件指纹设置
* 设置 MiniCssExtractPlugin 的 filename，使⽤ [contenthash]

```shell
npm install  mini-css-extract-plugin -D
```

* MiniCssExtractPlugin.loader,和css-loader功能互斥，MiniCssExtractPlugin将css文件作为一个单独的文件打包

---

#### CSS ⽂件的压缩
* 使⽤ optimize-css-assets-webpack-plugin
* 同时使⽤ cssnano

```shell
npm install optimize-css-assets-webpack-plugin -D
npm install cssnano -D
```

配置规则
```js
plugins: [
    new OptimizeCSSAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano’)
    })
]
```

##### html ⽂件的压缩
* 修改 html-webpack-plugin，设置压缩参数

```shell
npm install html-webpack-plugin -D
```

* 配置规则
```js
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: 'search.html',
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
```

#### ⾃动清理构建⽬录

* 使⽤ clean-webpack-plugin
```shell
npm install clean-webpack-plugin -D
```
* 配置方式
``` js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [  new CleanWebpackPlugin() };
```



 #### PostCSS 插件 autoprefixer ⾃动补⻬齐 CSS3 前缀

* 使⽤ autoprefixer 插件

* 根据 Can I Use 规则（ https://caniuse.com/ ）

  ```shell
  npm install postcss-loader autoprefixer -D
  ```

* 配置规则

  ```javascript
  { 
    loader: 'postcss-loader', 
      options: { plugins: () => [ require('autoprefixer')({ browsers: ["last 2 version", "> 1%", "iOS 7"] }) ] }
  
  }
  ```



#### 移动端 CSS px ⾃动转换成 rem

* 使⽤ px2rem-loader

* ⻚页⾯渲染时计算根元素的 font-size 值

  ```shell
  npm install px2rem-loader -D
  npm install lib-flexible -S
  ```

* 配置规则

  ```javascript
  { loader: "px2rem-loader", options: { remUnit: 75, remPrecision: 8 } }
  ```

  

#### 多⻚页⾯打包通⽤⽅案

* 动态获取 entry 和设置 html-webpack-plugin 数量
* 利⽤ glob.sync

```shell
npm install glob -D
```

```javascript
entry: glob.sync(path.join(__dirname, './src/*/index.js')),
```

