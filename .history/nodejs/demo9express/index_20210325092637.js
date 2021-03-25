const express = require('express')
let server = express()
server.listen(3000)
server.get('', (request, response) => {
    console.log(request)
    console.log(response)
})
server.post('', (request, response) => {
    console.log(request)
    console.log(response)
})