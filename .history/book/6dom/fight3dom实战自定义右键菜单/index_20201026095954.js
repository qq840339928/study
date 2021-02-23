window.onload = ()=> {
    var menu = document.getElementById('menu')
    document.oncontextmenu = (e)=> {
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}
document.oncontextmenu = (e)=> {

}