window.onload = () => {
    // 绑定键盘事件
    document.onkeydown = (event) => {
        // 兼容IE
        var e = window.event || event
        // 获取码值，并转换为可读字符
        console.log(e)
        var code = e.keyCode
        var letter = String.fromCharCode(code)
        console.log('您按下了'+letter+'字母,对应的值为:'+code)
        var randomNumber = Math.floor((Math.random() * 35 + 65)) // 取65到100之间的整数
        console.log(randomNumber)
    }
}