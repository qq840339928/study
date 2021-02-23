function positionMessage () {
    let pDom = document.getElementById('message')
    pDom.style.position = 'absolute'
    pDom.style.left = '0px'
    pDom.style.top = '0px'
    moveElement('message',500,600,10)
}
addLoadEvent(positionMessage)