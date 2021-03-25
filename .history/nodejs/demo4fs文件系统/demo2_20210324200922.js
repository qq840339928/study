const fs = require('fs')
fs.readFile('aa.txt', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
})