import jubu from './局部组件.vue'
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