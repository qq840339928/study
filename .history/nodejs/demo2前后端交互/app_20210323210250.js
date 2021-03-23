const http = require('http')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.statusCode = 200
    response.write('123')
    response.end()
})
// console.log(server)
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}`)
})