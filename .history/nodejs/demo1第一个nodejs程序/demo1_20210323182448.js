const http = require('http')
console.log(http)
const hostname ='127.0.0.1'
const port = 3000
const server = http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('你好世界\n')
})
server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}/`)
})
// setTimeout(() => {
//     process.exit() // 代码中关闭的方式
// }, 10000);