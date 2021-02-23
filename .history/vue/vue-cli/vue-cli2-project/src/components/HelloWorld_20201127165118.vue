<template>
  <div class="hello">
    <div class="t" id="test1">123</div>
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
  },
  mounted() {
    debugger
    document.childNodes[0].onmousedown = this.TextWidthChange;
    document.childNodes[1].onmousedown = this.TextWidthChange
  },
  methods: {
    TextWidthChange(e) {
      let odivParent = document.getElementById('test1')
      // let odivParent = e.currentTarget.parentNode; //获取目标父元素
      let dx= e.clientX;//当你第一次单击的时候，存储x轴的坐标。
      let dw= odivParent.offsetWidth;//存储默认的div的宽度。
      document.onmousemove = e => {
          odivParent.style.width=dw+(e.clientX-dx)+'px';

          if(odivParent.offsetWidth <= 100){//当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
            odivParent.style.width='100px';
          }

          if(odivParent.offsetWidth + odivParent.offsetLeft >= this.pdfWidth){
            odivParent.style.width = this.pdfWidth - odivParent.offsetLeft + 'px';
          }
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t{
  border: red 1px solid;
  width: 50%;
}
</style>
