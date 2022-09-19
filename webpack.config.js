const Webpack = require('webpack')
const path = require("path");
const childProcess=require('child_process')
const userInfo=require("./package.json")
function getProjectInfo() {
  return `
    Project name:${userInfo.name}
    Branch:${childProcess.execSync('git symbolic-ref --short -q HEAD')}
    Version:${childProcess.execSync('git show -s --format=%h')}
    Author:${childProcess.execSync('git show -s --format=%ce')}
    Recent edit by ${childProcess.execSync('git show -s --format=%ce')}/${childProcess.execSync('git show -s --format=%ce')} on ${new Date().toLocaleString()}`
}
module.exports = {
  // 模式
  mode: "production", // 也可以使用 production
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, "dist"),
    // 打包文件
    filename: "lhand-utils.js",
    // 向外暴露的对象的名称
    library: "lHands",
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: "umd",
  },
  plugins:[
    new Webpack.BannerPlugin({
      banner:getProjectInfo(),
      exclude:[/vendor/,/manifest/,/common/]
    }),
  ]
};
