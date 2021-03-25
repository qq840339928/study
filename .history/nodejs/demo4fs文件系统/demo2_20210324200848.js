const fs = require('fs')
fs.readFile('aa.txt', function (err, data) {
    console.log(err)
    console.log(data)
})