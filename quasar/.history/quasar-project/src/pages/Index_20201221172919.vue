<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/2.png"
    >
    <div class="shadow"></div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style lang="scss" scoped>
.shadow{
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  z-index:998;
  background-color:#000;
  opacity:0.6;
  display:none;
}
</style>
  
