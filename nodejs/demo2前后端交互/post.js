const http = require('http')
const querystring = require('querystring')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    response.setHeader('Access-Control-Allow-Origin', '*')
    let str = ''
    request.on('data', (data) => {
        str += data
    })
    request.on('end', function () {
        let result = login(str)
        response.write(result)
        response.end()
    })
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