// 假设要移动到500px 600px的地方
var nowX
var nowY
function moveElement (elementId,x,y,time) {
    debugger
    let pDom = document.getElementById(elementId)
    nowX = parseInt(pDom.style.left)
    nowY = parseInt(pDom.style.top)
    console.log(nowX,nowY)
    if (nowX === x && nowY === y) {
        return true
    }
    if (nowX < XMLSerializer) {
        nowX++
    }
    if (nowY < y) {
        nowY ++
    }
    pDom.style.left = nowX  + 'px'
    pDom.style.top = nowY + 'px'
    setTimeout(moveElement,time)
}