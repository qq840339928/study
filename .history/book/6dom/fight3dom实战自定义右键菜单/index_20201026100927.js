window.onload = ()=> {
    var menu = document.getElementById('menu')
    var left // 存一下
    var top
    document.oncontextmenu = (e)=> {
        console.log(e)
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}