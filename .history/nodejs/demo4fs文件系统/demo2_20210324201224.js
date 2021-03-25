const fs = require('fs')
fs.readFile('aa.txt',{'encoding': true}, function (err, data) {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})