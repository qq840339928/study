import jubu from './局部注册.js'
new Vue({
    el: '#app',
    data() {
        return {
            name: '父组件',
            fontSize: 48
        }
    },
    components: {
        jubu
    },
})