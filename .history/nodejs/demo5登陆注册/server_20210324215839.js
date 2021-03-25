const http = require('http')
const urlLib = require('url')
const fs = require('fs')
const port = 3000
const host = '127.0.0.1'
let users = {}
fs.readFile('user.txt', 'utf-8', function () {
})
http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(request.url, true).query
    if (users[json.username]) {
        response.write('用户已存在')
    } else {
        users[json.username] = json.password
        console.log('用户列表为:')
        console.log(users)
        response.write('注册成功')
    }
    response.end()
}).listen(port, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})
http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(request.url, true).query
    if (users[json.username] && users[json.username] === json.password) {
        response.write('登陆成功')
    } else {
        response.write('登陆失败')
    }
    response.end()
}).listen(3001, host, function () {
    console.log('服务器已部署在:' + host + ':' + port)
})