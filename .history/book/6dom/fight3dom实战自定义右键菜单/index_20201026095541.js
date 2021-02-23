window.onload = ()=> {
    var menu = document.getElementById('menu')
    document.oncontextmenu = (e)=> {
        menu.style.display = 'block'
    }
}