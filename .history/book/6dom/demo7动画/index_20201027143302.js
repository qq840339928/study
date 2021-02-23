// 假设要移动到500px 600px的地方
var nowX
var nowY
var moveTimer
function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '0px'
    pDom.style.top = '0px'
    moveTimer = setInterval(moveMessage,10)
}
function moveMessage () {
    let pDom = document.getElementById('message')
    nowX = parseInt(pDom.style.left)
    nowY = parseInt(pDom.style.top)
    console.log(nowX,nowY)
    if (nowX >= 500) {
        nowX = 500
    }
    if (nowY >= 600) {
        nowY = 600
    }
    pDom.style.left = parseInt(pDom.style.left) + 1 + 'px'
    pDom.style.top = parseInt(pDom.style.top) + 1 + 'px'
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