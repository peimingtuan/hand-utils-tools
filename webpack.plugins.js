/**
 * @Author : Evan-Pei
 * @Date : 2022/9/20
 * @Version : 1.0
 * @Last Modified time : 2022/9/20
 **/
const Webpack = require('webpack')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const childProcess=require('child_process')
const userInfo=require("./package.json")

function getProjectInfo() {
    return `
    Project name:${userInfo.name}
    Branch:${childProcess.execSync('git symbolic-ref --short -q HEAD').toString().trim()}
    Version:${childProcess.execSync('git show -s --format=%h').toString().trim()}
    Author:${childProcess.execSync('git show -s --format=%cn').toString().trim()}
    Recent edit by ${childProcess.execSync('git show -s --format=%cn').toString().trim()}/${childProcess.execSync('git show -s --format=%ce').toString().trim()} on ${new Date().toLocaleString()}`
}
module.exports=function(){
    let plugins=[
        new CleanWebpackPlugin(),
        new Webpack.BannerPlugin({
            banner:getProjectInfo(),
            exclude:[/vendor/,/manifest/,/common/]
        })
    ]
    return plugins
}