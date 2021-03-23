const http = require('http')
const querystring = require('querystring')
const urlLib = require('url')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    response.setHeader('Access-Control-Allow-Origin', '*')
    let a = urlLib.parse(request.url)
    console.log(a)
    let b = urlLib.parse(request.url, true)
})
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}`)
})
function login (str) {
    if (!str) {
        return('login faild')
    }
    let json = querystring.parse(str)
    if (json.username === '123' && json.password === '123') {
        return('login success')
    } else {
        return('login faild')
    }
}