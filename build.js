/**
 * @Author : Evan-Pei
 * @Date : 2022/9/22
 * @Version : 1.0
 * @Last Modified time : 2022/9/22
 **/
const Webpack = require('webpack')
const ora=require('ora')
const getWebpackConf = require('./webpack.config.js')
const fse = require('fs-extra')
//开始执行webpack
const spinner = ora(`Building for production...`);
spinner.start();
Webpack(Object.assign(getWebpackConf(),{mode:'production'}), function (err, stats) {
    spinner.succeed()
    if (err) throw err
    setTimeout(function(){
        try {
            fse.copySync('./dist', '../npm/persagy-hands-utils-tools')
            console.log('success!')
        } catch (err) {
            console.error(err)
        }
    },2000)
})