console.log("main.js...............");
// 1. 引入css文件
require("./css/normal.css");
import "./css/normal.css";
// 执行webpack打包会报错：You may need an appropriate loader to handle this file type.需要安装css loader
// webpack本身只是一个打包工具，不具备将.css,.vue,.jsx等代码转化成浏览器认识的语言，所以需要安装loader进行扩展
// 2. 安装：npm install --save-dev css-loader
// 3. 配置，在webpack.config.js中配置rules
/**
 * module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
 */
// 4. css-loader只负责将css进行加载，不会将样式插入到dom中，所以还要安装style-loader
// npm install style-loader --save-dev
// 配置
/**
 * module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
 */
