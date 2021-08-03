console.log("main.js........");

const { add, mul } = require("./mathUtil.js");
console.log("add...", add(100, 200));
console.log("mul...", mul(100, 200));

import { name, age, flag } from "./info.js";
console.log("es6 import...", name, age, flag);

// webpack能自动识别打包commonJS,ES6模块化的语法，生成浏览器能认识的js文件

// 1. webpack 入口js 打包后生成的js：webpack ./src/main.js ./dist/bundle.js
// 2. index.html引入打包后生成的js即可：<script src="./dist/bundle.js"></script>
