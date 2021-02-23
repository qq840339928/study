window.onload = ()=> {
    var menu = document.getElementById('menu')
    var left
        var top
    document.oncontextmenu = (e)=> {
        console.log(e)
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}