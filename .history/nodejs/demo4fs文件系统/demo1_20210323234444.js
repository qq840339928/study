const fs = require('fs')
console.log(fs)
fs.writeFile('aa,txt', '我是写入的内容哦',function () {
    console.log('回调')
})