const express = require('express')
const bodyParser = require('body-parser')
// const bodyParser = require('./myBodyParse.js')
let server = express()
server.listen(3000)
// server.get('', (request, response) => {
//     console.log('有人get了')
// })
// server.post('', (request, response) => {
//     console.log('有人post了')
// })
// server.use代替了get 和post 都能接收
server.use(bodyParser.urlencoded({}))//如果是post请求，使用这个
server.use('', (request, response) => {
    console.log('有人来了')
    console.log(request.body) //如果是post请求，使用这个
    console.log(request.query) // 如果是get请求，就可以使用request.query得到数据，post不行
    response.send({code:200}) // send === res.write() + res.end()
})