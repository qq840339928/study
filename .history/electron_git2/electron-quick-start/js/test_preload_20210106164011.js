
setTimeout(() => {
    // alert(process.getCPUUsage())
}, 5000);
document.querySelector('.new-doc').addEventListener('click', () => {
    alert('点击了同步')
})
document.getElementsByClassName('.new-doc')[0].addEventListener('click', () => {
    alert('点击了同步')
})