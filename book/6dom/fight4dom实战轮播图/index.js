var oDiv = document.getElementById('box')
var oUl = oDiv.getElementsByTagName('ul')[0]
var aLi = oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li')
var oNext = document.querySelector('.next')
var oPre = document.querySelector('.pre')
var n = 0
var arr = []
for (let i = 0; i < aLi.length; i++) {
    // 给ol标签下的li自定义index属性并赋值
    aLi[i].index = i
    // 底部圆点切换
    aLi[i].onclick = function() {
        debugger
        n = this.index
        for (let i = 0; i < aLi.length; i++) {
            aLi[i].className = ''
        }
        // 将active类添加刀ol标签下的li上
        this.className = 'active'
        oUl.style.left = -250 * this.index + 'px'
    }
}
oNext.onclick = function () {
    n++
    if (n ===aLi.length) {
        n = aLi.length - 1
    }
    for (let index = 0; index < aLi.length; index++) {
        aLi[index].className = ''
    }
    aLi[n].className = 'active'
    oUl.style.left = -250 * n + 'px'
}
oPre.onclick = function () {
    n--
    if (n < 0) {
        n = 0
    }
    for (let index = 0; index < aLi.length; index++) {
        aLi[index].className = ''
    }
    aLi[n].className = 'active'
    oUl.style.left = -250 * n + 'px'
}