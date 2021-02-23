window.onload = ()=> {
    var menu = document.getElementById('menu')
    var left // 存一下右键菜单应该处于的位置
    var top
    document.oncontextmenu = (e)=> {
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
        menu.style.left = left + 'px'
        menu.style.top = top + 'px'
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
    document.onclick = ()=> {
        menu.style.display = 'none'
        return false
    }
    var userSelection,text
    if (window.getSelection) {
        userSelection = window.getSelection()
    } else if (document.selection) {
        //IE
        userSelection = document.selection.createRange()
    }
    if (!(text = userSelection.text)){
        text = userSelection.toString()
    }
}