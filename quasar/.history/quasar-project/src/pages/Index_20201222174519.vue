<template>
  <q-page class="flex flex-center">
    v-for="(item, name, index) in items" :key="index"
    <div v-for="(value, name , index) in userInfo" :key='index'>

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
  
