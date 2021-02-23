window.onload = ()=> {
    var menu = document.getElementById('menu')
    document.oncontextmenu = (e)=> {
        var left
        var top
        console.log(e)
        menu.style.display = 'block'
        return false // 阻止原有右键事件
    }
}