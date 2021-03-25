const http = require('http')
const urlLib = require('url')
const port = 3000
const host = '127.0.0.1'
http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
}).listen(port, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})