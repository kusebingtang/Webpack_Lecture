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

