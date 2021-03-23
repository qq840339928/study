let a = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'
const url = require('url')
let str = url.parse(a)
console.log(str)