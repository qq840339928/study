
setTimeout(() => {
    // alert(process.getCPUUsage())
    
}, 5000);
document.querySelector('.new-doc').onclick = () => {
    alert('点击了同步')
}
document.getElementsByClassName('.new-doc')[0].onclick =  () => {
    alert('点击了同步')
}