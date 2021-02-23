// 假设要移动到500px 500px的地方
var nowX
var nowY
function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '50px'
    pDom.style.top = '100px'
    setTimeout(moveMessage,10) 
}
function moveMessage () {
    let pDom = document.getElementById('message')
    pDom.style.left = '200px'
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