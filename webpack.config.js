const path = require("path")
const getPlugins = require('./webpack.plugins')
module.exports = function(){
  return {
    // 模式
    mode: "production", // 也可以使用 production
    // 入口
    entry: "./src/index.js",
    // 出口
    output: {
      // 打包文件夹
      path: path.resolve(__dirname, "dist"),
      // 打包文件
      filename: "hand-utils.js",
      // 向外暴露的对象的名称
      library: "EHands",
      // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
      libraryTarget: "umd",
    },
    plugins:getPlugins()
  }
};
