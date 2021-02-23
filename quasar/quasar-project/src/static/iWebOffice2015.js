var userAgent = navigator.userAgent,
	rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
	rFirefox = /(firefox)\/([\w.]+)/,
	rOpera = /(opera).+version\/([\w.]+)/,
	rChrome = /(chrome)\/([\w.]+)/,
	rSafari = /version\/([\w.]+).*(safari)/;
var browser;
var version;
var ua = userAgent.toLowerCase();
function uaMatch(ua) {
	var match = rMsie.exec(ua);
	if (match != null) {
		return { browser: "IE", version: match[2] || "0" };
	}
	var match = rFirefox.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rOpera.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rChrome.exec(ua);
	if (match != null) {
		return { browser: match[1] || "", version: match[2] || "0" };
	}
	var match = rSafari.exec(ua);
	if (match != null) {
		return { browser: match[2] || "", version: match[1] || "0" };
	}
	if (match != null) {
		return { browser: "", version: "0" };
	}
}
var browserMatch = uaMatch(userAgent.toLowerCase());
if (browserMatch.browser) {
	browser = browserMatch.browser;
	version = browserMatch.version;
}

var str = '';

// var copyright = '金格科技iWebOffice2015智能文档中间件[演示版];V5.0S0xGAAEAAAAAAAAAEAAAAFIBAABgAQAALAAAAKZEm3Cwjf6QAl+AtJec866sTmeS/8TDMGXGx3FXcV9dgckvZpgoOZJfjNJvHxbAGV5o6H+1ZmQvl6YPL1qqLCJemV7b0I+jo7AA+L0zDVphQqnT/22fCXQWCiK0JZk8Q9ymTKjsM4a5om1/SkYZFhL/7Ntmz8W6zKpS81tk6YmnX/p+sniHNiX+vD5TjzMFBOO0QQZuCDzxiTTMI2KM9e5BqilJ/lfsJ5iyqZI7vGxq+BreO1y1ciNWvnllGN5kAaRAC6M0bSkPQ+kkCIbV3OX8oI+c0+BCje2hRmecwvasuQHstp8RP9g+amKYijxW0oqoLm3bciadiNdJfZZnPa0iGh5dx0Wx+iJFHuwi+Aw+EWzuXL6EPmUKReHxVHyg0r3k1dDpssshnBcJoVbQuK4whVFGo1+2ypaYo69nrax2D0l2cA6R6VmKqLyXjO49XmRyAnZQF/9HsOS22zAaDgZrM9gMSvew5+7m5vESnNpZ';

// var copyright_zukk = '金格科技iWebOffice信创中间件[演示];V5.0S0xGAAEAAAAAAAAAEAAAAEgBAABQAQAALAAAAGDV3U7sOUhHpD7WGljlLz3rFC0B82+CKBqCFyjY6jqEVw2UaQ1PYAHyHhj2XHhSTYxTiL5CVQrCjQIFhjMKiCX0GCTA6XR7FS5S7FV9C6KH1WRz25hrmhoIi+m/C+jv/PRYI+tK5ZAUra4cbFbbgbK0UMg1c/bJLDxet/Odbfk0Cq3UUpoPohA8cmU/f6oQKhkcMQ06+yNtTn6sbq8Il9Bd9IX3CDPcfNew2pC7DlPfQb9zVwemncjToJ3COVGenQ/fDhEfsMvPY0Si1PsxYhJTi1SpVwut7Cw0oghqEXXhFyB5z8/2KhSOH7pq7RcJgskDTMJgwXmE9sYGe+zc6Init/8x7qD7MmEVyhlaIcL6gQMjY1HYrxWmSzsVi63VW2Rz7LGtXr/EWjGBckniFrstPin8q1u+wbJltf588HP5r+hbchwLmf9I3ujHufOWSCsjdkfxH+REI4gs60LTKKc=';

var copyright = "金格科技iWebOffice2015智能文档中间件[演示版];V5.0S0xGAAEAAAAAAAAAEAAAAKUBAACwAQAALAAAANfaatsSZMh+MPN56UiHvIyRMMmcidhDaiV6PBLdjrDEfLi0mUpR7z1UFn0iyL/W3+66dBjHMr6Jk37o7av9s2bjR9fqBFYY10GsEi7bgzmDdWKFh5VDdSPu6uhSwgKc6CFLZC0nzXAuzwyOZdE0pNCj23pYidOvhNmU/DejydV4E5+vpKkYywkVMmPUCRPTVJg5H5D1fm53qj0cA6DhYkXnhRJB3Wp7oSayEViHendENCeUepsx9YKO9u3pQS6MNs6Jx/+KACUTZx8qxIky5jMclE2BZcsF2G61xcKQuhrYGBVQdbgUT8Tp7OAElrcTEHZliW6HttwUI3ObnLe68uCk28dR2Hc1FOyjsINsJHJ3sWjFkaaU64wIKzPOvVTubG01+ixMiBljSv0AWV4hYqcLBE3sTS+j43aaVTqD62Wd9DyC/RbN71kICAKL4/qUeXn2eGjPSaEqLS+0rBKFdn60vyvLftPWXFgSp0msQZjbg3OU8V9XH8BJxXBBGtjutASGGzDN8EtPKbopg/HWRcfETyKB5GOWvGJdg8SyIFrq4aJvF7vZzczBp871tMG2gzE3b2Q0g3Nqlr1Lij1J/vQ=";

var copyright_zukk = '金格科技iWebOffice信创中间件[演示];V5.0S0xGAAEAAAAAAAAAEAAAAEgBAABQAQAALAAAAGDV3U7sOUhHpD7WGljlLz3rFC0B82+CKBqCFyjY6jqEVw2UaQ1PYAHyHhj2XHhSTYxTiL5CVQrCjQIFhjMKiCX0GCTA6XR7FS5S7FV9C6KH1WRz25hrmhoIi+m/C+jv/PRYI+tK5ZAUra4cbFbbgbK0UMg1c/bJLDxet/Odbfk0Cq3UUpoPohA8cmU/f6oQKhkcMQ06+yNtTn6sbq8Il9Bd9IX3CDPcfNew2pC7DlPfQb9zVwemncjToJ3COVGenQ/fDhEfsMvPY0Si1PsxYhJTi1SpVwut7Cw0oghqEXXhFyB5z8/2KhSOH7pq7RcJgskDTMJgwXmE9sYGe+zc6Init/8x7qD7MmEVyhlaIcL6gQMjY1HYrxWmSzsVi63VW2Rz7LGtXr/EWjGBckniFrstPin8q1u+wbJltf588HP5r+hbchwLmf9I3ujHufOWSCsjdkfxH+REI4gs60LTKKc=';


if ((window.ActiveXObject != undefined) || (window.ActiveXObject != null) || "ActiveXObject" in window) {
	str += '<object id="WebOffice2015" ';

	str += ' width="100%"';
	str += ' height="100%"';
	//32位控件
	if (window.navigator.platform == "Win32")
		str += ' CLASSID="CLSID:D89F482C-5045-4DB5-8C53-D2C9EE71D025"  codebase="iWebOffice2015.cab#version=12,7,0,828"';
	//64位控件
	if (window.navigator.platform == "Win64")
		str += ' CLASSID="CLSID:D89F482C-5045-4DB5-8C53-D2C9EE71D024"  codebase="iWebOffice2015.cab#version=12,5,0,652"';
	str += '>';
	str += '<param name="Copyright" value="' + copyright + '">';
}
else if (browser == "chrome") {
	str += '<object id="WebOffice2015" ';


	str += ' width="100%"';
	str += ' height="100%"';
	str += ' clsid="CLSID:D89F482C-5045-4DB5-8C53-D2C9EE71D025"';
	str += ' type="application/kg-plugin"';                              //KGChromePlugin插件type
	//str += ' type="application/kg-activex"';                           //iWebPlugin插件type
	//str += ' type="application/iwebplugin"';
	str += ' OnCommand="OnCommand"';
	str += ' OnOLECommand="OnOLECommand"';
	str += ' OnReady="OnReady"';
	str += ' OnRightClickedWhenAnnotate="OnRightClickedWhenAnnotate"';
	str += ' OnSending="OnSending"';
	str += ' OnSendEnd="OnSendEnd"';
	str += ' OnRecvStart="OnRecvStart"';
	str += ' OnRecving="OnRecving"';
	str += ' OnRecvEnd="OnRecvEnd"';
	str += ' OnFullSizeBefore="OnFullSizeBefore"';
	str += ' OnFullSizeAfter="OnFullSizeAfter"';
	str += ' Copyright="' + copyright + '"';
	str += '>';
}
else if (browser == "firefox") {
	str += '<object id="WebOffice2015" ';
	str += ' width="100%"';
	str += ' height="1000px"';
	str += ' clsid="CLSID:D89F482C-5045-4DB5-8C53-D2C9EE71D025"';
	str += ' type="application/kg-activex"';
	//str += ' type="application/iwebplugin"';
	str += ' OnCommand="OnCommand"';
	str += ' OnReady="OnReady"';
	str += ' onUnload="onUnload"';
	str += ' OnOLECommand="OnOLECommand"';
	str += ' OnExecuteScripted="OnExecuteScripted"';
	str += ' OnQuit="OnQuit"';
	str += ' OnSendStart="OnSendStart"';
	str += ' OnSending="OnSending"';
	str += ' OnSendEnd="OnSendEnd"';
	str += ' OnRecvStart="OnRecvStart"';
	str += ' OnRecving="OnRecving"';
	str += ' OnRecvEnd="OnRecvEnd"';
	str += ' OnRightClickedWhenAnnotate="OnRightClickedWhenAnnotate"';
	str += ' OnFullSizeBefore="OnFullSizeBefore"';
	str += ' OnFullSizeAfter="OnFullSizeAfter"';
	str += ' Copyright="' + copyright + '"';
	str += '>';
}

str += '</object>';

var str_zukk = '<object id="WebOffice" type="application/iweboffice" height="1000px" width="100%" >'
str_zukk += '<param name="Copyright" value="' + copyright_zukk + '">';
str_zukk += '</object>';


//alert(OSType.indexOf("Win"))
var OSType = detectOS()
function LoadStr() {
	if (OSType.indexOf("Win") > -1) {
		//document.write(str); 
		//alert(str);
		return str;
	} else {
		//alert(str_zukk);
		return str_zukk;
		//document.write(str_zukk); 
	}
}

function detectOS() {
	var sUserAgent = navigator.userAgent;
	//alert("navigator.userAgent" + navigator.userAgent);
	//alert("navigator.platform" + navigator.platform);

	var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
	var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");

	if (isMac)
		return "Mac";

	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;

	if (isUnix)
		return "Unix";

	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);

	if (isLinux)
		return "Linux";

	if (isWin) {

		return "isWin";

		var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
		if (isWin2K)
			return "Win2000";

		var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
		if (isWinXP)
			return "WinXP";

		var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
		if (isWin2003)
			return "Win2003";

		var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
		if (isWinVista)
			return "WinVista";

		var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
		if (isWin7)
			return "Win7";

		var isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
		if (isWin10)
			return "isWin10";
	}

	return "other";
}

/////////////////////////////////////////////////////////////////////
//const WebOfficeStr = str
export  {
	LoadStr,detectOS
}

