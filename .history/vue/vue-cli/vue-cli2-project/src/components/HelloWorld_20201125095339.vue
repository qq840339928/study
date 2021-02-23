<template>
  <div class="hello">
    <div class="t">123</div>
    <div class="t">456</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t{
  border: red 1px solid;
}
</style>
