<template>
  <div class="main" v-html="WebOfficeStr" >
    <!--  v-html="WebOfficeStr" -->
  </div>
</template>

<script>
import { LoadStr, detectOS } from "@/WebOffice/iWebOffice2015.js";

console.log(LoadStr());
console.log(detectOS());
const WebOfficeStr = LoadStr();
const detectOSFlag = detectOS();
let WebOffice = null;

export default {
  data() {
    return {
      WebOfficeStr,
    };
  },

  created() {
    //bus。js实现组件通信
    this.$bus.on("WebOpenLocal", value => {
       this.WebOpenLocal();
    });
    this.$bus.on("WebSaveLocal", value => {
       this.WebSaveLocal();
    });
    this.$bus.on("CreateFile", value => {
       this.CreateFile();
    });
    this.$bus.on("WebOpenPrint", value => {
       this.WebOpenPrint();
    });
    this.$bus.on("WebInsertImage", value => { 
      this.$nextTick(() => { 
      // this.$nextTick()它是一个异步事件，当渲染结束 之后 ，它的回调函数才会被执行
      // 弹出窗口打开之后 ，需要加载Dom, 就需要花费一点时间，我们就应该等待它加载完dom之后，再进行调
          this.WebInsertImage();
        })
    }); 
    this.$bus.on("WebSavePdfFile", value => {
       this.WebSavePdfFile();
    }); 
    this.$bus.on("ExportToOfd", value => {
       this.ExportToOfd();
    });
    this.$bus.on("ShowRevision", value => {
       this.ShowRevision(value);
    });
    this.$bus.on("AcceptAllRevisions", value => {
       this.AcceptAllRevisions();
    });
    this.$bus.on("WebUseTemplate", value => {
       this.WebUseTemplate(value);
    });
    this.$bus.on("WebSetBookMark", value => {
       this.WebSetBookMark();
    });
    this.$bus.on("WebGetBookMark", value => {
       this.WebGetBookMark();
    });
    this.$bus.on("WebProtect", value => {
       this.WebProtect(value);
    });
    this.$bus.on("WebEnableCopy", value => {
       this.WebEnableCopy(value);
    });
  },

  mounted() {
    this.initOffice();
    let ocxobj = document.getElementById('WebOffice2015');
    // ocxobj.addEventListener('OnCommand',this.callBack);
    this.OnCommand(ID, Caption, bCancel)
  },

  methods: {

     callBack (){
        console.log('ocx事件')
     },
    //菜单栏按纽点击事件
    OnCommand(ID, Caption, bCancel){
      console.log(ID);
	  if (ID==1 || ID==101){  
      this.WebOpenLocal();     //打开本地文件
    }
  },

    //初始化控件
    initOffice() {
      if (detectOSFlag.indexOf("Win") > -1) {
        WebOffice = document.getElementById("WebOffice2015").FuncExtModule;
        //console.log(WebOffice);
        //以下属性必须设置，实始化iWebOffice控件
        WebOffice.WebUrl =
          "http://192.168.1.47:8080/iWebOfficeZZKK_2015/OfficeServer.jsp"; //WebUrl:系统服务器路径，与服务器文件交互操作，如保存、打开文档，重要文件
        WebOffice.RecordID = "123456789"; //RecordID:本文档记录编号
        WebOffice.Template = ""; //Template:模板编号
        WebOffice.FileName = "sample.doc"; //FileName:文档名称
        //alert(WebOffice.FileName),

        WebOffice.FileType = ".doc"; //FileType:文档类型  .doc  .xls  .wps
        //alert(WebOffice.FileType),
        WebOffice.UserName = "演示人"; //UserName:操作用户名，痕迹保留需要
        //alert(WebOffice.UserName) <%=mEditType%>
        WebOffice.EditType = "1,1"; //EditType:编辑类型  方式一、方式二  <参考技术文档>
        //第一位可以为0,1,2,3 其中:0不可编辑,1可以编辑,无痕迹,2可以编辑,有痕迹,不能修订,3可以编辑,有痕迹,能修订；
        //第二位可以为0,1 其中:0不可批注,1可以批注。可以参考iWebOffice2009的EditType属性，详细参考技术白皮书
        WebOffice.MaxFileSize = 4 * 1024; //最大的文档大小控制，默认是8M，现在设置成4M。
        WebOffice.ShowWindow = true; //控制显示打开或保存文档的进度窗口，默认不显示

        WebOffice.ShowToolBar = "0"; //ShowToolBar:是否显示工具栏:1显示,0不显示

        //WebOffice.ShowMenu = "1"; //控制整体菜单显示
        //以下为自定义菜单↓
        WebOffice.AppendMenu("1", "打开本地文件(&L)", this.png10);
        WebOffice.AppendMenu("2", "保存本地文件(&S)", this.png2);
        WebOffice.AppendMenu("3", "保存远程文件(&U)", this.png7);
        WebOffice.AppendMenu("4", "-");
        WebOffice.AppendMenu("5", "签名印章(&Q)", this.png15);
        WebOffice.AppendMenu("6", "验证签章(&Y)", this.png20);
        WebOffice.AppendMenu("7", "-");
        WebOffice.AppendMenu("8", "保存版本(&B)", this.png8);
        WebOffice.AppendMenu("9", "打开版本(&D)", this.png41);
        WebOffice.AppendMenu("10", "-");
        WebOffice.AppendMenu("11", "保存并退出(&E)", this.png4);
        WebOffice.AppendMenu("12", "-");
        WebOffice.AppendMenu("13", "打印文档(&P)", this.png13);
        //以上为自定义菜单↑
        WebOffice.AllowEmpty = true;
        WebOffice.WebOpen(); //打开该文档    交互OfficeServer  调出文档OPTION="LOADFILE"    调出模板OPTION="LOADTEMPLATE"     <参考技术文档>
        WebOffice.ShowType = "1"; //文档显示方式  1:表示文字批注  2:表示手写批注  0:表示文档核稿
        } else {
        WebOffice = document.getElementById("WebOffice");
        WebOffice.setPluginType(1);
        WebOffice.WebUrl =
          "http://192.168.1.47:8080/iWebOfficeZZKK_2015/OfficeServer.jsp"; //WebUrl:系统服务器路径，与服务器文件交互操作，如保存、打开文档，重要文件
        WebOffice.RecordID = "123456789"; //RecordID:本文档记录编号
        WebOffice.Template = ""; //Template:模板编号
        WebOffice.FileName = "sample.doc"; //FileName:文档名称
        //alert(WebOffice.FileName),

        WebOffice.FileType = ".doc"; //FileType:文档类型  .doc  .xls  .wps
        //alert(WebOffice.FileType),
        WebOffice.UserName = "演示人"; //UserName:操作用户名，痕迹保留需要
        //alert(WebOffice.UserName) <%=mEditType%>
        WebOffice.EditType = "1,1"; //EditType:编辑类型  方式一、方式二  <参考技术文档>
        WebOffice.WebOpen();
      }
    },

    //作用：退出iWebOffice
     UnLoad(){
      try{
      var ret = WebOffice.WebClose();
      //alert(ret);
      if (ret){
        if(detectOSFlag.indexOf("Win") > -1)
        {
          console.log(WebOffice.Status);
        }else
        {
          WebOffice.setPluginType(0);
        }
        }else{
          console.log("关闭文档...");
        }
      }catch(e){
        //alert(e.description);
      }
    },

    //作用：打开本地文件
    WebOpenLocal() {
      try {
        if (detectOSFlag.indexOf("Win") > -1) {
          WebOffice.WebOpenLocal();
          console.log(WebOffice.Status);
        } else {
          var ret = WebOffice.WebOpenLocal();
        }
      } catch (e) {
        WebOffice.Alert(e.description);
      }
    },

    ////作用：创建空白文档
    CreateFile() {
      if (WebOffice.CreateFile()) {
        console.log("新建空白文档成功");
        return true;
      } else {
        console.log("新建空白文档失败");
        return false;
      }
    },

    //作用：保存文档
    SaveDocument(){
      //alert(WebOffice.Modify);                  //判断文档是否修改，false表明文档没有修改，true表明文档被修改
      var ret = WebOffice.WebSave();  //交互OfficeServer的OPTION="SAVEFILE" 		
      if (ret){    
        if(detectOSFlag.indexOf("Win") > -1)
        {
          WebOffice.Alert(WebOffice.Status);
          window.location.reload();//刷新当前页.
          return true;
        }else
        {
          WebOffice.Alert(WebOffice.Status);
          window.location.reload();//刷新当前页.
          WebOffice.WebClose();
          WebOffice.setPluginType(0);
          return true;
        }	
      }else{
        console.log(WebOffice.Status);
      //alert(WebOffice.Status);
      return false;
      }
    },

      //作用：显示或隐藏痕迹[隐藏痕迹时修改文档没有痕迹保留]  true表示隐藏痕迹  false表示显示痕迹
    ShowRevision(mValue){
      //WebOffice.Alert(mValue)
      if (mValue){
        WebOffice.WebShow(true);
        //WebOffice.setScreenFocus();      //设置焦点到文档中
        console.log("显示痕迹...");
      }else{
        WebOffice.WebShow(false);
        //WebOffice.setScreenFocus();
        console.log("隐藏痕迹...");
      }
    },

    //作用：接受文档所有痕迹
    AcceptAllRevisions(){
      if(detectOSFlag.indexOf("Win") > -1){
        WebOffice.WebObject.Application.ActiveDocument.AcceptAllRevisions();
        var mCount = WebOffice.WebObject.Application.ActiveDocument.Revisions.Count;
        if(mCount>0){
          return false;
        }else{
          return true;
        }
      }else{
        //var app = WebOffice.KGGetObject("Application");   //获取WPS对象
        //app.ActiveDocument.AcceptAllRevisions();          //调用WPS接口接受文档中所有痕迹
        var ret = WebOffice.ClearRevisions();               //接受当前文档中所有的痕迹
        WebOffice.setScreenFocus();                        ////设置焦点到文档中
        return ret;
      }
    },

    //作用：存为本地文件,弹出对话框
    WebSaveLocal(){
    try{
      WebOffice.WebSaveLocal();
      //alert(ret);
      console.log("文档保存成功！");
    }catch(e){
      WebOffice.Alert(e.description);
      }
    },

  //文档保存为PDF
    WebSavePdfFile(){
   try{
    //alert(WebOffice.WebSavePDF());
    WebOffice.Alert('WebSavePDF');
    if(WebOffice.WebSavePDF())                          //调用时发生交互OPTION值为：SAVEPDF
	  {
    	WebOffice.Alert("另存为PDF成功");
	  }
    else{
		  WebOffice.Alert(另存为PDF失败);
	  }
    console.log(WebOffice.Status);
    //alert(WebOffice.Status);
  }
    catch(e){
    WebOffice.Alert(e.description);                                   //显示出错误信息  
  }
  },

    //控件中word文档导出为OFD文档
  ExportToOfd(){
	  //alert(OSType);
	if(detectOSFlag.indexOf("Win") > -1){
		WebOffice.Alert('此功能要在国产化系统里面使用');
		return false
	}
//	var strTmp = "<%=mFileName%>";
//	var pos = strTmp.indexOf(".");
//	var strTmpFileName = strTmp.substr(0, pos);
//	var url = "<%=mHttpUrl%>";
//	var strURL = "<%=mServerUrl%>"+"FileUpload";
	
	//var nType = 3;      //控件加载数科OFD
	//var nType = 4;      //控件加载福昕OFD
	
	strTmpFileName = 123456 + ".ofd";
	strFileName = "/tmp/" + strTmpFileName;
	var ret = WebOffice.WebSaveLocalFile(strFileName);   //控件中word文档另存到本地OFD文档
	if(!ret){
		console.log("导出OFD文档失败");
		return false;
	}else{
		var save = SaveDocument();                //保存word文档后，再关闭word文档，释放插件
		//WebOffice.setPluginType(nType);               //调用数科ofd插件
		//调用数科
		WebOffice.LoadPluginByLib(3, "application/ofd", "/opt/suwell/Reader_Pro/libnpSuwellReader.so")
		if(WebOffice.openFile(strFileName)){      //控件中打开OFD文档
			//setToolBar(nType);                    //控制demo左边功能按钮
			console.log("导出OFD文档成功");
		}else{
			return false;
		}
		return true;
	}
},

//作用：插入远程服务器图片
 WebInsertImage(){
  try{
		if(detectOSFlag.indexOf("Win") > -1){
			WebOffice.WebInsertImage('Content','GoldgridLogo.jpg',true,4);   //交互OfficeServer的OPTION="INSERTIMAGE"  参数1表示标签名称  参数2表示图片文件名  参数3为true透明  false表示不透明  参数4为4表示浮于文字上方  5表示衬于文字下方	
    }else{
			var ret = WebOffice.WebInsertImage('Content','GoldgridLogo.jpg',true,4);                  //交互OfficeServer的OPTION="INSERTIMAGE"    参数表示图片文件名，在当前光标位置插入图片
			//var ret = WebOffice.WebInsertImage("/tmp/金格科技电子签章公司4X4.png");   //插入本地图片，参数表示本地图片全路径，在当前光标位置插入图片
		}
	  var status = WebOffice.WebGetMsgByName("STATUS");
		//alert(status);
	  console.log(status);
    }catch(e){
      //WebOffice.Alert(e.description);
    }
  },

	//作用：模版套红功能
	 WebUseTemplate(TemplateName) {
     WebOffice.Alert(TemplateName);
		var webshow = WebOffice.WebShow(true);
		if (!webshow) { //清除正文痕迹的目的是为了避免痕迹状态下出现内容异常问题。
			console.log("清除正文痕迹失败，套红中止");
			return false;
		}
		var saveok = WebOffice.WebSave(); //保存当前编辑的文档	
		//alert(saveok);
		if (saveok) {
			if (detectOSFlag.indexOf("Win") > -1) {
				WebOffice.WebClose();
			} else {
				WebOffice.CloseDocument();
			}
		} else {
			WebOffice.Alert("当前编辑文档保存失败");
			return false;
		}
		WebOffice.WebSetMsgByName("COMMAND", "INSERTFILE"); //设置变量COMMAND="INSERTFILE"，在WebLoadTemplate()时，一起提交到OfficeServer中     <参考技术文档>
		WebOffice.Template = TemplateName; //全局变量Template赋值，此示例读取服务器目录中模板，如读取数据库中模板，Template值为数据库中的模板编号，则上句代码不需要，如Template="1050560363767"，模板名称为“Word公文模板”，注：模板中有要标签Content，区分大小写，可以自行修改
		WebOffice.EditType = "1,1"; //控制为不保留痕迹的状态
		if (WebOffice.WebLoadTemplate()) { //交互OfficeServer的OPTION="LOADTEMPLATE"
			//SetBookmarks("Title","关于中间件研发工作会议通知");     //填充模板其它基本信息，如标题，主题词，文号，主送机关等
      var ret = WebOffice.WebInsertFile();
      //WebOffice.WebObject.Application.Selection.InsertFile("C:\\abc.doc", "", false, false, false);
			//alert(ret);
			if (ret) { //填充公文正文   交互OfficeServer的OPTION="INSERTFILE"
				if (detectOSFlag.indexOf("Linux") > -1)
					;
				{
					var app = WebOffice.KGGetObject("Application");
					app.ShowDocumentFieldTarget = false; //iWebOffice信创中间件隐藏公文域的红色标记
				}
				console.log("模板套红成功");
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
  },
  
  //作用：打印文档
 WebOpenPrint(){
  try{
    var falg = WebOffice.WebOpenPrint();
    //alert(falg);
  }catch(e){WebOffice.Alert(e.description);}
},

	//作用：保护与解除  参数1为true表示保护文档  false表示解除保护
 WebProtect(value){
  try{
    WebOffice.WebSetProtect(value,"");  //""表示密码为空
    WebOffice.Alert("控制文档成功")
  }catch(e){WebOffice.Alert(e.description);}
},

//作用：允许与禁止拷贝功能  参数1为true表示允许拷贝  false表示禁止拷贝
 WebEnableCopy(value){
  try{
    WebOffice.CopyType=value;
    WebOffice.Alert("控制文档成功")
  }catch(e){WebOffice.Alert(e.description);}
},

//书签填充
 WebSetBookMark(){
	WebOffice.Alert("默认向文档中Content书签填充Value");
	if (detectOSFlag.indexOf("Win") > -1) {
	  if (!WebOffice.WebSetBookmarks("Content","这是填充书签Content内容测试")){
		     console.log(WebOffice.Status);
		  }else{
		     console.log(WebOffice.Status);
		  }
	}else{
		  if (!WebOffice.WebSetBookMarks("Content","这是填充书签Content内容测试")){
			     console.log(WebOffice.Status);
			  }else{
			     console.log(WebOffice.Status);
			  }
	}
},

//获取书签内容
 WebGetBookMark(){
	WebOffice.Alert("获取文档中Content书签的Value");
	WebOffice.Alert(WebOffice.WebGetBookMarks("Content"));
}

}
};
</script>



<style scoped>
</style> -

