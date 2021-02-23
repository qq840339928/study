window.onload = ()=> {
    var menu = document.getElementById('menu')
    var left // 存一下右键菜单应该处于的位置
    var top
    document.oncontextmenu = (e)=> {
        console.log(e)
        console.log(document.body.clientWidth - menu.offsetWidth)
        if (e.clientX > document.body.clientWidth - menu.offsetWidth) {
            left = document.body.clientWidth - menu.offsetWidth
        } else {
            left = e.clientX
        }
        if (e.clientY > document.body.clientHeight - menu.offsetHeight) {
            top = document.body.clientHeight - menu.offsetHeight
        } else {
            top = e.clientY
        }
        // 把菜单位置挪一下
        menu.clientX = left + 'px'
        menu.clientY = top + 'px'
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}