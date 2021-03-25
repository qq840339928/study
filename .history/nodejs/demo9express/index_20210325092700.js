const express = require('express')
let server = express()
server.listen(3000)
server.get('', (request, response) => {
    console.log('有人get了')
    console.log(request)
    console.log(response)
})
server.post('', (request, response) => {
    console.log('有人post了')
    console.log(request)
    console.log(response)
})