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
---