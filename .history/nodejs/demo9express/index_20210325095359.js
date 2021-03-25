const express = require('express')
const bodyParser = require('body-parser')
let server = express()
console.log(bodyParser)
server.listen(3000)
// server.get('', (request, response) => {
//     console.log('有人get了')
// })
// server.post('', (request, response) => {
//     console.log('有人post了')
// })
// server.use代替了get 和post 都能接收
server.use('', (request, response) => {
    console.log('有人来了')
    console.log(request.query) // 如果是get请求，就可以使用request.query得到数据，post不行
})