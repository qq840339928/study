const fs = require('fs')
console.log(fs)
fs.writeFile('aa,txt', '我是写入的内容哦123123',function (error) {
    console.log('回调')
    console.log(error)
})