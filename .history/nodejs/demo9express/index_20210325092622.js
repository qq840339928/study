const express = require('express')
let server = express()
server.listen(3000)
server.get('', (request, response) => {
    console.log(request)
})