const fs = require('fs')
fs.writeFile('test.txt', '{user:123}', function () {
    fs.readFile('test.txt', 'utf-8',function (error, data) {
        if (error) {
            console.log(error)
        } else {
            console.log(JSON.parse(data))
        }
    })
})