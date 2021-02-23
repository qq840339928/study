const { add } = require('./js/main.js')
console.log(add(1,2))
// 依赖css
require('./css/base.css')
import Vue from 'vue'
import Cpn from './components/Cpn.vue'
var app = new Vue({
    el: '#app',
    data: {
        name: 'zhangsan',
        age: 18
    },
    // template: '<div>{{name}}</div>'
})