const express = require('express')
let server = express()
server.listen(3000)
server.get('', (request, response) => {
    console.log('有人get了')
})
server.post('', (request, response) => {
    console.log('有人post了')
})
server.use('', (request, response) => {
    console.log('有人来了')
})