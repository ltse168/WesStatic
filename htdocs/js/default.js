var http = "ht"+"tp://"
var sKanhanServer = "";

//set the path for kanhan server 
if(document.URL.toString().search('westcomzivo') != -1){ sKanhanServer = "common.westcomzivo.com/gb/"}
else if (document.URL.toString().search('gov.hk') != -1){ sKanhanServer = "sc.info.gov.hk/gb/"}
else { sKanhanServer = "sc.info.gov.hk/gb/"}

//set the path for kanhan server if external use 
if (external)
{if (govKanHan){sKanhanServer = "sc.info.gov.hk/gb/"}
else{ sKanhanServer = "common.westcomzivo.com/gb/"}}

//set the path for images in TC and SC version
var imagePath = "images"
if(document.URL.toString().search('/gb/') != -1)
{imagePath = "../sim/images"}

var NetscapeVer = "";
var Netscape = "";
Netscape = navigator.appName == "Netscape";
if(Netscape) {NetscapeVer = parseInt(navigator.appVersion);}
//if(Netscape&&NetscapeVer == 4) {alert(NetscapeVer) }


//Use for highlight the left menu button
var mainTopic = "";
var mainTopicNo = "";
var otherTopicNo = "";
var mainTopicFlag = false;

//Use for the second level layer menu
var contentLayerFlag = true;
var leftMenuFlag = false;
var firstLayerFlag = false;
var firstLayerTimerID;
var DHFlag = false;
var secondLayerFlag = false;
var firstLayerTimerID;
var firstLayerTimerID2;
var activeLeftMenuID = "";

//Use for Left Menu Mouse Over and Mouse Out function
var leftMenuCommonImageName = "topic_";
var headingCommonImageName = "hd_";
var leftMenuSectionImageOut = ".gif";
var leftMenuSectionImageOver = "-over.gif";
var leftMenuWidth = 153;
var highestLeftMenuButton = 0;

//simple mouse over and mouse out function
function simg(obj,url)
{if (document.images){obj.src = url;}}

//get the x, y coordinate of the object
function getDim(el){
	for (var lx=0,ly=0;el!=null;
		lx+=el.offsetLeft,ly+=el.offsetTop,el=el.offsetParent);
	return {x:lx,y:ly}
}

//move the layer position
function moveDivs(layerObj, inObjTop){
	layerObj.top = inObjTop;
	layerObj.left = leftMenuWidth;
} 

//mouse over function for first level layer
function layerMouseOver(obj,layerObj)
{
var firstLayer = "";
var targetImage = "";
if(Netscape&&NetscapeVer == 4)
{
	firstLayer = document.layers[layerObj].document;
	targetImage = firstLayer.images[obj]
	if (document.images){targetImage.src = upOneLevelLink+imagePath+"/layer/" + obj + leftMenuSectionImageOver;}
}
else
{if (document.images){eval("document.images." + obj + ".src = '"+upOneLevelLink+imagePath+"/layer/" + obj + leftMenuSectionImageOver +"'");}}
}

//mouse out function for first level layer
function layerMouseOut(obj,layerObj)
{
var firstLayer = "";
var targetImage = "";
if(Netscape&&NetscapeVer == 4)
{
	firstLayer = document.layers[layerObj].document;
	targetImage = firstLayer.images[obj]
	if (document.images){targetImage.src = upOneLevelLink+imagePath+"/layer/" + obj + leftMenuSectionImageOut;}
}
else
{if (document.images){eval("document.images." + obj + ".src = '"+upOneLevelLink+imagePath+"/layer/" + obj + leftMenuSectionImageOut +"'");}}
}

//mouse over function for CLF top menu
function overTopMenu(obj)
{if (document.images){eval("document.images." + obj + ".src = '"+upOneLevelLink+imagePath+"/" + obj + "_f2.gif'");}}

//mouse out function for CLF top menu
function outTopMenu(obj)
{if (document.images){eval("document.images." + obj + ".src = '"+upOneLevelLink+imagePath+"/" + obj + ".gif'");}}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//show the second level layer menu and highlight the first level left menu button
function doShowMenu(imgName)
{
var temp1 = leftMenuCommonImageName + mainTopicNo;

	//if(mainTopic != imgName && !leftMenuFlag)
	if(!leftMenuFlag)
	{
		if (temp1 == imgName){
//		document.images[imgName].src=document.images[imgName].src.replace(leftMenuSectionImageOver, leftMenuSectionImageOver)
		leftMenuFlag = true;}
		else{
		document.images[imgName].src=document.images[imgName].src.replace(leftMenuSectionImageOut, leftMenuSectionImageOver)
		leftMenuFlag = true;}
	}
	if (!firstLayerFlag)
	{
		MM_showHideLayers(imgName + "_layer",'','show');
		firstLayerFlag=true;
	}
	activeLeftMenuID = imgName
}

//mouse over function for first level left menu and second level layer
function leftMenuMouseOver(imgName) {
	
	if (activeLeftMenuID == imgName)
	{
		if (firstLayerTimerID) clearTimeout(firstLayerTimerID);
		firstLayerTimerID = null;
	}
	else
	{
		if (firstLayerTimerID) clearTimeout(firstLayerTimerID);
		firstLayerTimerID = null;
		if (activeLeftMenuID!=""){doHideMenu(activeLeftMenuID);}
		doShowMenu(imgName)	
	}
}

//hide the second level layer menu and cancel highlight the first level left menu button
function doHideMenu(imgName)
{
var temp1 = leftMenuCommonImageName + mainTopicNo;

	if(true)
	//if(mainTopic != imgName)
	{
	if (temp1 == imgName){
//		document.images[imgName].src=document.images[imgName].src.replace(leftMenuSectionImageOver, leftMenuSectionImageOut)
		leftMenuFlag = false;}
	else{
		document.images[imgName].src=document.images[imgName].src.replace(leftMenuSectionImageOver, leftMenuSectionImageOut)
		leftMenuFlag = false;}
	}
	if (firstLayerFlag)
	{
		MM_showHideLayers(imgName + "_layer",'','hide')
		firstLayerFlag=false;
	}
	activeLeftMenuID = "";
}

//mouse out function for first level left menu and second level layer
function leftMenuMouseOut(imgName) {
	if (activeLeftMenuID == imgName)
	{
		firstLayerTimerID = setTimeout("doHideMenu('"+imgName+"')", 500);
	}
	else
	{
		doHideMenu(imgName);
	}
}

//function for switch language
function switchLang(curLang, tarLang)
{
	var tempVar = "";
	var tempPos = "";
	var pathname = window.location.href.toLowerCase();
	var cgiFlag = false;
	var whatsNewFlag = false;
	var licenceFormFlag = false;
	var gicSearchFlag = false;
	if (pathname.indexOf("#")!=-1)
	{
		tempPos = pathname.indexOf("#")
		tempVar = pathname.substring(tempPos,pathname.length)
		pathname = pathname.substring(0,tempPos)
	}
//	if (pathname.indexOf("/cgi-bin/")!=-1)
//	{
//		if (pathname.indexOf("licencesearch.pl")!=-1 || pathname.indexOf("licencesearch_detail.pl")!=-1 || pathname.indexOf("licence.pl")!=-1)
//		{
//			if (tarLang.indexOf("/text/")!=-1)
//			{
//				pathname = pathname.replace(".pl", "_t.pl");
//				tarLang = tarLang.replace("/text", "");
//			}
//			cgiFlag = true
//			licenceFormFlag = true
//		}
//		else if (pathname.indexOf("licencesearch_t.pl")!=-1 || pathname.indexOf("licencesearch_detail_t.pl")!=-1 || pathname.indexOf("licence_t.pl")!=-1)
//		{
//			if (curLang.indexOf("/text/")!=-1)
//			{
//				pathname = pathname.replace("_t.pl", ".pl");
//			}
//			cgiFlag = true
//			licenceFormFlag = true
//		}
//		else if (pathname.indexOf("whatsnew.pl")!=-1 || pathname.indexOf("whatsnew_content.pl")!=-1)
//		{
//			if (tarLang.indexOf("/text/")!=-1)
//			{
//				pathname = pathname.replace(".pl", "_t.pl");
//				tarLang = tarLang.replace("/text", "");
//				curLang = curLang.replace("/text", "");
//			}
//			cgiFlag = true
//			whatsNewFlag = true
//		}
//		else if (pathname.indexOf("whatsnew_t.pl")!=-1 || pathname.indexOf("whatsnew_content_t.pl")!=-1)
//		{
//			if (curLang.indexOf("/text/")!=-1)
//			{
//				pathname = pathname.replace("_t.pl", ".pl");
//				curLang = curLang.replace("/text", "");
//			}
//			cgiFlag = true
//			whatsNewFlag = true
//		}
//		else if (pathname.indexOf("se.cgi")!=-1)
//		{
//			cgiFlag = true
//			gicSearchFlag = true
//		}
//		else
//		{
//			if (mainTopicNo!=0){pathname = arMainTopicLink[mainTopicNo]+"index.html";}
//			else{pathname = arMainTopicLink[otherTopicNo]+"index.html";}
//		}
//	}
	
	if (curLang == "/gb/"){pathname = pathname.replace(http+sKanhanServer, http);curLang="/chi/"}
	if (tarLang == "/gb/"){pathname = pathname.replace(http, http+sKanhanServer);tarLang="/chi/"}
	if (!cgiFlag)
	{location = pathname.replace(curLang, tarLang);}
	else
	{
		if (whatsNewFlag)
		{whatsNewSwitchLang(pathname, curLang, tarLang);}
		else if (licenceFormFlag)
		{licenceFormSwitchLang(pathname, tarLang);}
		else if (gicSearchFlag)
		{gicSearchSwitchLang(pathname, curLang, tarLang);}
	}
	
}

//use different CSS for IE and netscape
function checkStyle() {
	if (!Netscape) {document.write("<LINK href='"+upTwoLevelLink+"css/style_sheet_" + lang + ".css' rel='stylesheet' type='text/css'>");}
	else{document.write("<LINK href='"+upTwoLevelLink+"css/style_sheet_" + lang + "_net.css' rel='stylesheet' type='text/css'>");}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function gicSearchSwitchLang(pathname, curLang, tarLang)
{
	var modeKey = "mode=";
	var curModeNo = "0";
	var tarModeNo = "0";
	if (curLang.indexOf("/text/")!=-1)
	{
		if (curLang.indexOf("/eng/")!=-1)
		{
			curModeNo="192";
			tarModeNo="190";
		}
		if (curLang.indexOf("/chi/")!=-1)
		{
			curModeNo="193"
			tarModeNo="191";
		}
	}
	else if (tarLang.indexOf("/text/")!=-1)
	{
		if (tarLang.indexOf("/eng/")!=-1)
		{
			curModeNo="190";
			tarModeNo="192";
		}
		if (tarLang.indexOf("/chi/")!=-1)
		{
			curModeNo="191"
			tarModeNo="193";
		}
	}
	else if (pathname.indexOf("mode=190")!=-1 || pathname.indexOf("mode=191")!=-1)
	{
		if (tarLang.indexOf("/eng/")!=-1)
		{
			curModeNo="191";
			tarModeNo="190";
		}
		if (tarLang.indexOf("/chi/")!=-1)
		{
			curModeNo="190"
			tarModeNo="191";
		}
	}
	else if (pathname.indexOf("mode=192")!=-1 || pathname.indexOf("mode=193")!=-1)
	{
		if (tarLang.indexOf("/eng/")!=-1)
		{
			curModeNo="193";
			tarModeNo="192";
		}
		if (tarLang.indexOf("/chi/")!=-1)
		{
			curModeNo="192"
			tarModeNo="193";
		}
	}
	
	
	pathname = pathname.replace(modeKey+curModeNo, modeKey+tarModeNo);
	location = pathname;
}