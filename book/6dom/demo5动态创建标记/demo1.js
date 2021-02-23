window.onload = function () {
    // 1.innerHTML属性
    var testdiv = document.getElementById('testdiv')
    // alert(testdiv.innerHTML)
    // testdiv.innerHTML = '<p>新内容</p>'
    // 2.createElement
    // var p = document.createElement('p')
    // var info = 'nodeName:' + p.nodeName + ' nodeType:' + p.nodeType
    // // alert(info)
    // // 插入到dom里面
    // // 3.appendChild
    // testdiv.appendChild(p)
    // // 4.createTextNode 顺序居然可以这样?
    // var textNode = document.createTextNode('hello world')
    // p.appendChild(textNode)
    // 5.以上综合应用
    var p = document.createElement('p')
    var pTxt = document.createTextNode('This is')
    var em = document.createElement('em')
    var emTxt = document.createTextNode(' my')
    var content = document.createTextNode(' content.')
    testdiv.appendChild(p).appendChild(pTxt)
    p.appendChild(em).appendChild(emTxt)
    p.appendChild(content)
}