const fs = require("fs");

const dragWrapper = document.getElementById("drag_test");
dragWrapper.addEventListener("drop",(e)=>{
    e.preventDefault(); //阻止e的默认行为
    const files = e.dataTransfer.files;
    if (files && files.length>=1){
        const path = files[0].path;
        console.log("file:",path);
        const content = fs.readFileSync(path);
        console.log(content.toString());
    }
})
//这个事件也需要屏蔽
dragWrapper.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
function getProcessInfo(){
    console.log("Cpu Usage:", process.getCPUUsage());
    console.log("env",process.env);
    console.log("arc",process.arch);
}