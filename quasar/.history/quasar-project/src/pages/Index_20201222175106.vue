<template>
  <q-page class="flex flex-center">
    <div v-for="(name , index) in userInfo" :key='index'>
      {{index}}.{{name}}.{{value}}
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      userInfo: {
        age: 18,
        sex: '男'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
  
