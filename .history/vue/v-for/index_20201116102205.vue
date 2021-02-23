<template>
  <div>
      <div :v-for="(name, value, index) in userInfo">

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                name: '张三',
                age: 18,
                sex: female
            }
        }
    },
}
</script>

<style>

</style>