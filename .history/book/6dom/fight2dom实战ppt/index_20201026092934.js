var colors = ['#22A7F0','60D7A9','#FDC162','FD6A62','F68DBB','333333']
var pageDom = document.getElementsByClassName('page')
// var pageDom = document.querySelectorAll('.page')
console.log(pageDom)
var pageDomLength = pageDom.length
console.log(pageDomLength)
// 分配颜色
for(let i=0;i<pageDomLength;i++){
    console.log(pageDom[i])
}