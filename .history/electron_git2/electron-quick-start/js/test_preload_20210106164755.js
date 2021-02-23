
setTimeout(() => {
    // alert(process.getCPUUsage())
    alert(document.querySelector('.index-logo-src').src)
    alert(document.getElementById('s_lg_img').src)
}, 5000);
document.querySelector('.new-doc').onclick = () => {
    alert('点击了同步')
}
document.getElementsByClassName('.new-doc')[0].onclick =  () => {
    alert('点击了同步')
}