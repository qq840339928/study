var oDiv = document.getElementById('box')
var oUl = oDiv.getElementsByTagName('ul')[0]
var aLi = oDiv.getElementsByTagName('ol')[0]
var oNext = document.querySelector('.next')
var oPre = document.querySelector('.pre')
var n = 0
var arr = []
for (let i = 0; index < aLi.length; index++) {
    // 给ol标签下的li自定义index属性并赋值
    aLi[i] = i
}