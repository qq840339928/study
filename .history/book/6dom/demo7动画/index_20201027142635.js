// 假设要移动到500px 600px的地方
var nowX
var nowY
var moveTimer
function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    // pDom.style.left = '50px'
    // pDom.style.top = '100px'
    moveTimer = setTimeout(moveMessage,10) 
}
function moveMessage () {
    let pDom = document.getElementById('message')
    nowX = ++pDom.style.left
    nowY = ++pDom.style.top
    if (nowX === 500) {
        return true
    }
    if (nowY === 600) {
        return true
    }
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