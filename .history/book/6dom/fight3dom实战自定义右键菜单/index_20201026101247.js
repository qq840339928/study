window.onload = ()=> {
    var menu = document.getElementById('menu')
    var left // 存一下右键菜单应该处于的位置
    var top
    document.oncontextmenu = (e)=> {
        console.log(e)
        console.log(document.body.clientWidth - menu.offsetWidth)
        if (e.clientX > 0) {

        }
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}