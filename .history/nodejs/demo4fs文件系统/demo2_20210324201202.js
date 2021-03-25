const fs = require('fs')
fs.readFile('aa.txt',{'encoding': 'string'}, function (err, data) {
    if (err) {
        console.log(err)
        return
    }
    console.log(data.toString())
})