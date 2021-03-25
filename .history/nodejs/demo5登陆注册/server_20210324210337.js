const http = require('http')
const urlLib = require('url')
const port = 3000
const host = 'https://127.0.0.1'
http.createServer((request, response) => {
}).listen(port, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})