var colors = ['#22A7F0','60D7A9','#FDC162','FD6A62','F68DBB','333333']
var pageDom = document.getElementsByClassName('page')
// var pageDom = document.querySelectorAll('.page')
console.log(pageDom)
var pageDomLength = pageDom.length
console.log(pageDomLength)
// 分配颜色
for(let i=0;i<pageDomLength;i++){
    pageDom[i].style.background = colors[i]
}
// 获取满屏高度
var clientHeight = document.body.clientHeight
console.log('满屏高度' + clientHeight)
// 允许最大高度
var max = clientHeight * (length - 1)
// 允许最小高度
var min = 0
// 当前高度
var height = 0
document.onkeydown = (e) => {
    switch (e.keyCode) {
        case 37:
        case 38:
        default:
            break;
    }
}