var oDiv = document.getElementById('box')
var oUl = oDiv.getElementsByTagName('ul')[0]
var aLi = oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li')
var oNext = document.querySelector('.next')
var oPre = document.querySelector('.pre')
var n = 0
var arr = []
debugger
for (let i = 0; i < aLi.length; i++) {
    debugger
    // 给ol标签下的li自定义index属性并赋值
    aLi[i].index = i
    // 底部圆点切换
    aLi[i].onclick = ()=> {
        n = this.index
        for (let i = 0; i < aLi.length; i++) {
            aLi[i].className = ''
        }
        // 将active类添加刀ol标签下的li上
        this.className = 'active'
        oUl.style.left = -205*this.index + 'px'
    }
}