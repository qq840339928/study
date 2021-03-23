const http = require('http')
console.log(http)
const hostname ='127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('你好世界\n')
})
server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}/`)
})
setTimeout(() => {
    process.exit() // 关闭的方式
}, 10000);