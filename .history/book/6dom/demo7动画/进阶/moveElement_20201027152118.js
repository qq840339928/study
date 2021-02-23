// 假设要移动到500px 600px的地方
var nowX
var nowY
function moveElement (elementId,x,y,time) {
    let pDom = document.getElementById(elementId)
    nowX = parseInt(pDom.style.left)
    nowY = parseInt(pDom.style.top)
    console.log(nowX,nowY)
    if (nowX === x && nowY === y) {
        return true
    }
    if (nowX < x) {
        nowX ++
    }
    if (nowY < y) {
        nowY ++
    }
    console.log(nowX,nowY)
    pDom.style.left = nowX  + 'px'
    pDom.style.top = nowY + 'px'
    // setTimeout(moveElement(elementId,x,y,time),time)
    moveElement(elementId,x,y,time)
}