const http = require('http')
const urlLib = require('url')
const port = 3000
const host = '127.0.0.1'
let users = {}
http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(request.url, true).query
    console.log('收到的信息：' + json)
    if (users[json.username]) {
        response.write('用户已存在')
    } else {
        users[json.username] = json.password
        response.write('注册成功')
    }
    response.end()
}).listen(port, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})
http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(request.url, true).query
    console.log('收到的信息：' + json)
    if (users[json.username]) {
        response.write('用户已存在')
    } else {
        users[json.username] = json.password
        response.write('注册成功')
    }
    response.end()
}).listen(3001, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})