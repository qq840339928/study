//引入node模块
const fs=require('fs');

var div=document.querySelector('.box');

//绑定拖拽结束事件
div.addEventListener('drop', function(e){
	//必须要阻止拖拽的默认事件
    e.preventDefault();
    e.stopPropagation();
    
	//获得拖拽的文件集合
    var files=e.dataTransfer.files;

    if(files.length>0)
    {
     console.log(files[0].path);
    }
    
    var content=fs.readFileSync(files[0].path);
    console.log(content.toString());
  });

//绑定拖拽文件在容器移动事件
div.addEventListener('dragover',(e)=>{
	//必须要阻止拖拽的默认事件
    e.preventDefault();
    e.stopPropagation();

})