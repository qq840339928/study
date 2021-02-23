// 假设要移动到500px 600px的地方
var nowX
var nowY
var moveTimer
function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '0px'
    pDom.style.top = '0px'
    moveMessage('message',500,600,10)
}
function addLoadEvent (func) {
    let oldOnload = window.onload
    if (typeof(oldOnload) !== 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            oldOnload()
            func()
        }
    }
}
addLoadEvent(positionMessage)

function moveElement (elementId,x,y,time) {
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
    setTimeout(moveMessage,time)
}