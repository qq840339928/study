let http = require('http')
const ip = '127.0.0.1'
const port = 3000
let server = http.createServer(ip, port)
console.log(server)