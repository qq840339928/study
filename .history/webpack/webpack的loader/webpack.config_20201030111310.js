const path = require('path')
module.exports = { //es6的语法 模块导出
    entry: './src/index.js', // 入口
    output: { //出口
        path: path.resolve(__dirname, 'dist'), //出口标明文件夹
        filename:'bundle.js ' // 出口表明文件名字
    },
    module: {
        // rules: [
        //     { 
        //         test: /\.css$/, 
        //         // 'style-loader'将样式作用到dom中
        //         use: [ 'style-loader' ,'css-loader'] 
        //     }
        // ]
        rules: [
            {
              test: /\.css$/,
              use: [
                // { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                }
              ]
            }
        ]
    }
}
