const http = require('http')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    response.setHeader('Access-Control-Allow-Origin', '*')
    let requestUrl = request.url
    let url = requestUrl.split('?')[1]
    let params = url.split('&')
    let json = {}
    for (let index = 0; index < params.length; index++) {
        json[params[index].split('=')[0]] = params[index].split('=')[1]
    }
    console.log(json)
    if (json.username === '123' && json.password === '123') {
        response.statusCode = 200
        response.write('login success')
    } else {
        response.write('login faild')
    }
    response.end()
})
// console.log(server)
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}`)
})
function login (request) {

}