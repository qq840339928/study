let http = require('http')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    response.write(123)
    response.end()
})
// console.log(server)
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}上`)
})