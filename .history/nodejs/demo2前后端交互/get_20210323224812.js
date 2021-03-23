const http = require('http')
const querystring = require('querystring')
const host = '127.0.0.1'
const port = 3000
let server = http.createServer((request, response) => {
    console.log('有人调用了')
    response.setHeader('Access-Control-Allow-Origin', '*')
    let result = login(request.url)
    response.write(result)
    response.end()
})
// console.log(server)
server.listen(port, host, 1, function () {
    console.log(`服务器已部署在${host}:${port}`)
})
function login (requestUrl) {
    let url = querystring.parse(requestUrl.split('?')[1], )
    if (!url) {
        return('login faild')
    }
    if (url.username === '123' && url.password === '123') {
        return('login success')
    } else {
        return('login faild')
    }
}