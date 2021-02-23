// 假设要移动到500px 600px的地方
var nowX
var nowY
var moveTimer
function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '0px'
    pDom.style.top = '0px'
    moveTimer = setTimeout(moveMessage,10) 
}
function moveMessage () {
    let pDom = document.getElementById('message')
    pDom.style.left = parseInt(pDom.style.left) + 1 + 'px'
    pDom.style.top = parseInt(pDom.style.top) + 1 + 'px'
    nowY = parseInt(pDom.style.left)
    console.log(nowY)
    // nowY = ++pDom.style.top
    if (nowX === 500) {
        return true
    }
    if (nowY === 600) {
        return true
    }
    if (nowX === 500 && nowY === 600) {
        clearTimeout(moveTimer)
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