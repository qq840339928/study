const fs = require('fs')
fs.writeFile('test.txt', '{}', function () {
    fs.readFile('test.txt', 'utf-8',function () {
        
    })
})