const fs = require('fs')
fs.write('test.txt', '今天天气不错', function (error,data) {
    console.log(data)
})