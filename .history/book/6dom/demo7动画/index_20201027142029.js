function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '50px'
    pDom.style.top = '100px' 
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