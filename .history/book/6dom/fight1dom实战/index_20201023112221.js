window.onload = () => {
    // 绑定键盘事件
    document.onkeydown = (event) => {
        // 兼容IE
        var e = window.event || event
        // 获取码值，并转换为可读字符
        console.log(e)
        var code = e.keyCode
    }
}