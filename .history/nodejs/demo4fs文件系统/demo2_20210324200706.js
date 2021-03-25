const fs = require('fs')
console.log(fs)
fs.readFile('./aa.txt', function (data) {
    console.log(data)
})