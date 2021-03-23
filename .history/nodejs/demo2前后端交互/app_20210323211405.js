const http = require('http')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    let requestUrl = request.url
    let url = requestUrl.split('?')[1]
    let params = url.split('&')
    let json = {}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    json[url.split('&')]
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.statusCode = 200
    response.write('456')
    response.end()
})
// console.log(server)
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}`)
})