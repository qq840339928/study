<template>
  <div class = "routeManagement">
    <vue-json-editor 
      v-model="routeJson" :showBtns="true" lang="zh"
      @json-change="onJsonChange" @json-save = "onJsonSave"/>
  </div>
</template>

<script>
// 引入vue-json-editor模块
import vueJsonEditor from 'vue-json-editor'
export default {
  data () {
    return{
      // 可使用 JSON.parse() JSON.stringify() 转化 json 数据
      json: {
        msg: 'demo of jsoneditor'
      }
    }
  },
  components: {
    vueJsonEditor
  },
  methods: {
    onJsonChange () { // 数据改变时触发
    },
    onJsonSave(){ // 点击保存触发
    }
  },
}
</script>

<style lang="scss" scoped>
.routeManagement{
  width:98%;
  margin:16px auto;
  /deep/.jsoneditor-vue{
    height:700px;
  }
  /deep/.json-save-btn{
    cursor: pointer;
  }
}
</style>