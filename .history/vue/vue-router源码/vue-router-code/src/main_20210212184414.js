// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
let a = function () {
  console.log(123)
}
a.install = function (vue) {
  vue.mixin({
    data: function () {
      a: 111
    }
  })
}
Vue.use(a)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
