var nowLetter = ''// 记录当前字母
var rightNumber = 0
var errorNumber = 0
window.onload = () => {
    getRandomLetter ()
    // 绑定键盘事件
    document.onkeydown = (event) => {
        // 兼容IE
        var e = window.event || event
        // 获取码值，并转换为可读字符
        console.log(e)
        var code = e.keyCode
        var letter = String.fromCharCode(code)
        console.log('您按下了'+letter+'字母,对应的值为:'+code)
        if (letter === nowLetter) {
            rightNumber ++
            getRandomLetter()
        } else {
            errorNumber ++
        }

        // 更新节点
        document.getElementsByClassName('count')[0].innerHTML = '正确:'+rightNumber+ ' 错误:'+errorNumber+ ' 正确率:'+parseInt(rightNumber/(rightNumber+errorNumber)*100) +'%'
    }
}
function getRandomLetter () {
    var randomNumber = Math.floor((Math.random() * 25 + 65)) // 取65到90之间的整数
    console.log(randomNumber)
    // 将随机数转换为字母
    var randomLetter = String.fromCharCode(randomNumber)
    console.log(randomLetter)
    nowLetter = randomLetter
    var letterElement = document.getElementsByClassName('letter')[0]
    fadeOn(letterElement, 100)
    fadeIn(letterElement, 3000)
    letterElement.innerHTML = randomLetter
}
/**
 * 渐进效果
 */
function fadeIn (dom, time) {
    dom.style.opacity === '' ? dom.style.opacity = 0 : ''
    var interval = setInterval(() => {
        var opacity = parseFloat(dom.style.opacity)
        if (opacity < 1) {
            dom.style.opacity = parseFloat(dom.style.opacity) + 0.01
        } else {
            clearInterval(interval)
        }
    }, time / 100);
}
/**
 * 渐出效果
 */
function fadeOn (dom, time) {
    dom.style.opacity === '' ? dom.style.opacity = 0 : ''
    var interval = setInterval(() => {
        var opacity = parseFloat(dom.style.opacity)
        if (opacity > 0) {
            dom.style.opacity = parseFloat(dom.style.opacity) - 0.01
        } else {
            clearInterval(interval)
        }
    }, time / 100);
}