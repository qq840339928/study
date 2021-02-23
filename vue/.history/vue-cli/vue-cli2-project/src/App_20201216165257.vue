<template>
  <div id="app">
    <img src="./assets/logo.png">
    <jsonEditor/>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import jsonEditor from "./components/test"
export default {
  name: 'App',
  components: {
    HelloWorld,
    jsonEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
