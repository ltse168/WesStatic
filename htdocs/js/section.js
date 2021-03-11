/********************* Variable defined for switch language *********************/
var langNo = 1;
if (lang=="eng"){langNo=1}else{langNo=2}	// 1= Eng, 2 = TC or SC
/********************* End of Variable defined for switch language *********************/

var errorMsg="The search function is under maintenance.  We are sorry for the inconvenience caused.";
if (langNo==2){errorMsg="現 正 維 修 搜 尋 功 能。 不 便 之 處 , 敬 請 原 諒。";}

/********************* Variable defined for generate the page title *********************/
var arPageTitle = new Array()
	arPageTitle[1] = new Array()
	arPageTitle[1][1] = "Village Representative Elections"	//Main page title for ENG version
	
	arPageTitle[2] = new Array()
	arPageTitle[2][1] = "村代表選舉"	//Main page title for TC and SC version
/********************* End of Variable defined for generate the page title *********************/

/********************* Variable defined for generate the CLF top menu *********************/
var arClfTopMenu = new Array()
	arClfTopMenu[1] = new Array()
	arClfTopMenu[1][1] = "ht"+"tp://search.info.gov.hk/cgi-bin/se.cgi";
	//arClfTopMenu[1][1] = "javascript:alert(errorMsg)";
	arClfTopMenu[1][2] = "1";
	arClfTopMenu[1][3] = "Village Representative Elections, The Government of the Hong Kong Special Administrative Region";
	arClfTopMenu[1][4] = "7";
	arClfTopMenu[1][5] = "ht"+"tp://www.brandhk.gov.hk/brandhk/eindex.htm";
	arClfTopMenu[1][6] = "Brand Hong Kong";
	arClfTopMenu[1][7] = "Government Information Centre";
	arClfTopMenu[1][8] = "/eng/";
	arClfTopMenu[1][9] = "/text/eng/";
	arClfTopMenu[1][10] = "Text only";
	arClfTopMenu[1][11] = "/eng/";
	arClfTopMenu[1][12] = "/chi/";
	arClfTopMenu[1][13] = "Traditional Chinese";	
	arClfTopMenu[1][14] = "/eng/";	
	arClfTopMenu[1][15] = "/gb/";	
	arClfTopMenu[1][16] = "Simplified Chinese";	
	arClfTopMenu[1][17] = "Search";	
	arClfTopMenu[1][18] = "Site Map";	
	arClfTopMenu[1][19] = "Contact Us";	
	
	arClfTopMenu[2] = new Array()
	arClfTopMenu[2][1] = "ht"+"tp://search2.info.gov.hk/cgi-bin/se.cgi";
	//arClfTopMenu[2][1] = "javascript:alert(errorMsg)";
	arClfTopMenu[2][2] = "0";
	arClfTopMenu[2][3] = "香港特別行政區政府 - 村代表選舉";
	arClfTopMenu[2][4] = "12";
	arClfTopMenu[2][5] = "ht"+"tp://www.brandhk.gov.hk/brandhk/index.htm";
	arClfTopMenu[2][6] = "香港品牌形象";
	arClfTopMenu[2][7] = "政府資訊中心";
	arClfTopMenu[2][8] = "/chi/";
	arClfTopMenu[2][9] = "/text/chi/";
	arClfTopMenu[2][10] = "繁體純文字";
	arClfTopMenu[2][11] = "/chi/";
	arClfTopMenu[2][12] = "/gb/";
	arClfTopMenu[2][13] = "簡體版";	
	arClfTopMenu[2][14] = "/chi/";	
	arClfTopMenu[2][15] = "/eng/";	
	arClfTopMenu[2][16] = "English";	
	arClfTopMenu[2][17] = "搜尋";	
	arClfTopMenu[2][18] = "網站指南";	
	arClfTopMenu[2][19] = "聯絡我們";
	
if(document.URL.toString().search('/gb/') != -1)
{
	arClfTopMenu[2][1] = "ht"+"tp://sc.info.gov.hk/gb/search2.info.gov.hk/cgi-bin/se.cgi";
	//arClfTopMenu[2][1] = "javascript:alert(errorMsg)";
	//arClfTopMenu[2][2] = "191";
	//arClfTopMenu[2][3] = "香 港 特 別 行 政 區 - 旅 行 代 理 商 註 冊 處";
	arClfTopMenu[2][4] = "6";
	arClfTopMenu[2][5] = "ht"+"tp://sc.info.gov.hk/dsclmr/gb/www.brandhk.gov.hk/brandhk/index.htm";
	//arClfTopMenu[2][6] = "香 港 品 牌 形 象";
	//arClfTopMenu[2][7] = "政 府 資 訊 中 心";
	//arClfTopMenu[2][8] = "/chi/";
	//arClfTopMenu[2][9] = "/text/chi/";
	arClfTopMenu[2][10] = "簡 體 純 文 字";
	arClfTopMenu[2][11] = "/gb/";
	arClfTopMenu[2][12] = "/chi/";
	arClfTopMenu[2][13] = "繁 體 版";	
	arClfTopMenu[2][14] = "/gb/";	
	arClfTopMenu[2][15] = "/eng/";	
	arClfTopMenu[2][16] = "English";	
	//arClfTopMenu[2][17] = "搜 尋";	
	//arClfTopMenu[2][18] = "網 站 地 圖";	
	//arClfTopMenu[2][19] = "聯 絡 我 們";
}
/********************* End of Variable defined for generate the CLF top menu *********************/
	
/********************* Variable defined for generate left menu, sitemap and page title*********************/
var arMainTopicLink = new Array()	//folder name for first level sections
	arMainTopicLink[1] = upOneLevelLink+"intro/";
	arMainTopicLink[2] = upOneLevelLink+"ordinance/";
	arMainTopicLink[3] = upOneLevelLink+"features/";
	arMainTopicLink[4] = upOneLevelLink+"types/";
	arMainTopicLink[5] = upOneLevelLink+"electors/";
	arMainTopicLink[6] = upOneLevelLink+"candidates/";
	arMainTopicLink[7] = upOneLevelLink+"voter/";
	arMainTopicLink[8] = upOneLevelLink+"forms/";
	arMainTopicLink[9] = upOneLevelLink+"elections/";
	arMainTopicLink[10] = upOneLevelLink+"elections/";
	arMainTopicLink[11] = upOneLevelLink+"guidelines/";
	arMainTopicLink[12] = upOneLevelLink+"notices/";
	arMainTopicLink[13] = upOneLevelLink+"press/";
	arMainTopicLink[14] = upOneLevelLink+"enquiries/";
	arMainTopicLink[15] = upOneLevelLink+"rural/";
	arMainTopicLink[16] = upOneLevelLink+"hyker/";

var arMainTopicImage = new Array()	//image name for first level sections
	arMainTopicImage[1] = "1";
	arMainTopicImage[2] = "2";
	arMainTopicImage[3] = "3";
	arMainTopicImage[4] = "4";
	arMainTopicImage[5] = "5";
	arMainTopicImage[6] = "6";
	arMainTopicImage[7] = "7";
	arMainTopicImage[8] = "8";
	arMainTopicImage[9] = "9";
	arMainTopicImage[10] = "10";
	arMainTopicImage[11] = "11";
	arMainTopicImage[12] = "12";
	arMainTopicImage[13] = "13";
	arMainTopicImage[14] = "14";
	arMainTopicImage[15] = "15";
	arMainTopicImage[16] = "16";

var arMainTopicAlt = new Array()
	arMainTopicAlt[1] = new Array()
	arMainTopicAlt[1][1] = "Introduction";
	arMainTopicAlt[1][2] = "Ordinances and Regulations";
	arMainTopicAlt[1][3] = "Main Features";
	arMainTopicAlt[1][4] = "Types of Village Representatives";
	arMainTopicAlt[1][5] = "Eligibility Requirements for Electors";
	arMainTopicAlt[1][6] = "Eligibility Requirements for Candidates";
	arMainTopicAlt[1][7] = "Voter Registration";
	arMainTopicAlt[1][8] = "Forms";
	arMainTopicAlt[1][9] = "Elections";
	arMainTopicAlt[1][10] = "List of Village Representatives";
	arMainTopicAlt[1][11] = "Guidelines";
	arMainTopicAlt[1][12] = "Notices";
	arMainTopicAlt[1][13] = "Press Releases";
	arMainTopicAlt[1][14] = "Enquiries";
	arMainTopicAlt[1][15] = "Rural Committee Elections";
	arMainTopicAlt[1][16] = "Heung Yee Kuk Election";
	
	arMainTopicAlt[2] = new Array()
	arMainTopicAlt[2][1] = "簡介";
	arMainTopicAlt[2][2] = "條例及法例";
	arMainTopicAlt[2][3] = "主要內容";
	arMainTopicAlt[2][4] = "村代表組別";
	arMainTopicAlt[2][5] = "選民資格";
	arMainTopicAlt[2][6] = "候選人資格";
	arMainTopicAlt[2][7] = "選民登記";
	arMainTopicAlt[2][8] = "表格";
	arMainTopicAlt[2][9] = "村代表選舉";
	arMainTopicAlt[2][10] = "村代表名單";
	arMainTopicAlt[2][11] = "活動指引";
	arMainTopicAlt[2][12] = "公告";
	arMainTopicAlt[2][13] = "新聞稿";
	arMainTopicAlt[2][14] = "查詢";
	arMainTopicAlt[2][15] = "鄉事委員會選舉";
	arMainTopicAlt[2][16] = "鄉議局選舉";
	
var arOtherTopicLink = new Array()	//folder name for first level sections but not include in the left menu
	arOtherTopicLink[1] = upOneLevelLink+"sitemap/";
	arOtherTopicLink[2] = upOneLevelLink+"important/";
	arOtherTopicLink[3] = upOneLevelLink+"search/";

var arOtherTopicImage = new Array()	//image name for first level sections but not include in the left menu
	arOtherTopicImage[1] = "site";
	arOtherTopicImage[2] = "important";
	arOtherTopicImage[3] = "search";

var arOtherTopicAlt = new Array()	//Alt text for first level sections but not include in the left menu
	arOtherTopicAlt[1] = new Array()
	arOtherTopicAlt[1][1] = "Site Map";
	arOtherTopicAlt[1][2] = "Important Notices";
	arOtherTopicAlt[1][3] = "Search";
	
	arOtherTopicAlt[2] = new Array()
	arOtherTopicAlt[2][1] = "網頁指南";
	arOtherTopicAlt[2][2] = "重要告示";
	arOtherTopicAlt[2][3] = "搜尋";

if (mainTopicNo != 0){mainTopic = leftMenuCommonImageName+arMainTopicImage[mainTopicNo];}

/********************* End of Variable defined for generate left menu, sitemap and page title*********************/	
	
/********************* Variable defined for generate Second level left menu, sitemap and page sub-title*********************/	
var arSubTopicLink = new Array()	//html file name for second level sections
	arSubTopicLink[9] = new Array()
	arSubTopicLink[9][1] = "by0605_index2.html";
	arSubTopicLink[9][2] = "by0601_index2.html";
	arSubTopicLink[9][3] = "by0505_index2.html";
	arSubTopicLink[9][4] = "by11_index2.html";
	arSubTopicLink[9][5] = "by_index2.html";
	arSubTopicLink[9][6] = "index2.html";
	
var arSubTopicImage = new Array()	//image name for second level sections
	arSubTopicImage[9] = new Array()
	arSubTopicImage[9][1] = "9_6";
	arSubTopicImage[9][2] = "9_5";
	arSubTopicImage[9][3] = "9_4";
	arSubTopicImage[9][4] = "9_1";
	arSubTopicImage[9][5] = "9_2";
	arSubTopicImage[9][6] = "9_3";
var arSubTopicAlt = new Array()	//Alt text for second level sections
	arSubTopicAlt[1] = new Array()
	arSubTopicAlt[1][9] = new Array()
	arSubTopicAlt[1][9][1] = "By-election (21.5.2006)";
	arSubTopicAlt[1][9][2] = "By-election (8.1.2006)";
	arSubTopicAlt[1][9][3] = "By-election (8.5.2005)";
	arSubTopicAlt[1][9][4] = "By-election (28.11.2004)";
	arSubTopicAlt[1][9][5] = "By-election (28.3.2004)";
	arSubTopicAlt[1][9][6] = "Village Representative Elections 2003";

	arSubTopicAlt[2] = new Array()
	arSubTopicAlt[2][9] = new Array()
	arSubTopicAlt[2][9][1] = "村代表補選(21.5.2006)";
	arSubTopicAlt[2][9][2] = "村代表補選(8.1.2006)";
	arSubTopicAlt[2][9][3] = "村代表補選(8.5.2005)";
	arSubTopicAlt[2][9][4] = "村代表補選(28.11.2004)";
	arSubTopicAlt[2][9][5] = "村代表補選(28.3.2004)";
	arSubTopicAlt[2][9][6] = "2003年村代表選舉";

/********************* End of Variable defined for generate Second level left menu, sitemap and page sub-title*********************/	

/********************* Variable defined for generate footer menu*********************/	
var arFooter = new Array()
	arFooter[1] = new Array()
	arFooter[1][1] = "Important Notices";
	arFooter[1][2] = "Last revision date: ";
//	arFooter[1][3] = " ";
//	arFooter[1][4] = " ";
//	arFooter[1][5] = " ";
	arFooter[1][3] = "Back To Top";
	
	arFooter[2] = new Array()
	arFooter[2][1] = "重 要 告 示";
	arFooter[2][2] = "最 近 修 訂 日 期 : ";
//	arFooter[2][3] = "年";
//	arFooter[2][4] = "月";
//	arFooter[2][5] = "日";
	arFooter[2][3] = "返 回 頁 首";	
/********************* End of Variable defined for generate footer menu*********************/		

/********************* Variable defined for store the name of layer*********************/	
var arLayer = new Array()
/********************* End if Variable defined for store the name of layer*********************/	
	
/********************* Function for generate the CLF top menu*********************/	
function clfTopMenu()
{
	document.writeln('<table width="100%" border="0" cellpadding="0" cellspacing="0">');
	document.writeln('<form name="form1" method="get" action="'+arClfTopMenu[langNo][1]+'">');
	document.writeln('<INPUT name=mode type=hidden value='+arClfTopMenu[langNo][2]+'>');
	document.writeln('<INPUT name="lmode" type="hidden" value="1">\n')
	document.writeln('<INPUT name="pq" type="hidden" value="">\n')
	document.writeln('<INPUT name="pg" type="hidden" value="">\n')
	document.writeln('<INPUT name="pn" type="hidden" value="0">\n')
	document.writeln('<INPUT name="qm" type="hidden" value="0">\n')
	document.writeln('<INPUT name="la" type="hidden" value="1">\n')
	document.writeln('<INPUT name="de" type="hidden" value="0">\n')
	document.writeln('<INPUT name="so" type="hidden" value="0">\n')
	document.writeln('<INPUT name="nu" type="hidden" value="10">\n')
	document.writeln('<INPUT name="ca" type="hidden" value="0">\n')
	document.writeln('<INPUT name="ta" type="hidden" value="all">\n')
	document.writeln('<INPUT name="fu" type="hidden" value="">\n')
	document.writeln('<INPUT name="fd" type="hidden" value="">\n')
	document.writeln('<INPUT name="ma" type="hidden" value="100">\n')
	document.writeln('<INPUT name="ft_1" type="hidden" value="alltype">\n')
	document.writeln('<INPUT name="gr_1" type="hidden" value="had">\n')
	document.writeln('    <tr align="left" valign="top"> ');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" bgcolor="#FAFAEB"><a href="'+upTwoLevelLink+'index.html"><img src="'+upOneLevelLink+imagePath+'/branding.gif" border=0 alt="'+arClfTopMenu[langNo][3]+'"></a></td>');
	document.writeln('      <td rowspan="2" valign="bottom" background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" align=center bgcolor="#FAFAEB" width="99"><input type="text" name="qu" size="'+arClfTopMenu[langNo][4]+'" class="search_box"></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" bgcolor="#FAFAEB" width="22">&nbsp;</td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" colspan="2" valign="bottom" align=right bgcolor="#FAFAEB" width="97"><a href="'+arClfTopMenu[langNo][5]+'" target="_top"><img name="BrandHK" src="'+upOneLevelLink+imagePath+'/brandhk.gif" border="0" alt="'+arClfTopMenu[langNo][6]+'"></a></td>');
	document.writeln('    </tr>');
	document.writeln('	<tr align="left" valign="top"> ');
	document.writeln('	  <td><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="236"><a href="ht'+'tp://www.info.gov.hk/" onMouseOut="outTopMenu(\'mainbar1\')" onMouseOver="overTopMenu(\'mainbar1\')"><img name="mainbar1" src="'+upOneLevelLink+imagePath+'/mainbar1.gif" border="0" alt="'+arClfTopMenu[langNo][7]+'"></a></td>');
	document.writeln('      <td align="left" valign="top"><a href="javascript:switchLang(\''+arClfTopMenu[langNo][8]+'\',\''+arClfTopMenu[langNo][9]+'\')" onMouseOut="outTopMenu(\'mainbar2\')" onMouseOver="overTopMenu(\'mainbar2\')"><img name="mainbar2" src="'+upOneLevelLink+imagePath+'/mainbar2.gif" border="0" alt="'+arClfTopMenu[langNo][10]+'"></a></td>');
	document.writeln('	  <td align="left" valign="top" width="56"><a href="javascript:switchLang(\''+arClfTopMenu[langNo][11]+'\',\''+arClfTopMenu[langNo][12]+'\')" onMouseOut="outTopMenu(\'mainbar3\')" onMouseOver="overTopMenu(\'mainbar3\')"><img name="mainbar3" src="'+upOneLevelLink+imagePath+'/mainbar3.gif" border="0" alt="'+arClfTopMenu[langNo][13]+'"></a></td>');
	document.writeln('      <td align="left" valign="top" width="51"><a href="javascript:switchLang(\''+arClfTopMenu[langNo][14]+'\',\''+arClfTopMenu[langNo][15]+'\')" onMouseOut="outTopMenu(\'mainbar4\')" onMouseOver="overTopMenu(\'mainbar4\')"><img name="mainbar4" src="'+upOneLevelLink+imagePath+'/mainbar4.gif" border="0" alt="'+arClfTopMenu[langNo][16]+'"></a></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" bgcolor="#FAFAEB" width="50"><img name="mainbar5" src="'+upOneLevelLink+imagePath+'/mainbar5.gif" border="0" alt=""></td>');
	document.writeln('	  <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" bgcolor="#FAFAEB" width="100%"><img src="'+upOneLevelLink+imagePath+'/spacer.gif" border="0" height=1 width=10 alt=""></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="54"><a href="javascript:document.forms.form1.submit()" onMouseOut="outTopMenu(\'mainbar6\')" onMouseOver="overTopMenu(\'mainbar6\')"><img name="mainbar6" src="'+upOneLevelLink+imagePath+'/mainbar6.gif" border="0" alt="'+arClfTopMenu[langNo][17]+'"></a></td>');
	//document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="54"><a href="javascript:alert(errorMsg)" onMouseOut="outTopMenu(\'mainbar6\')" onMouseOver="overTopMenu(\'mainbar6\')"><img name="mainbar6" src="'+upOneLevelLink+imagePath+'/mainbar6.gif" border="0" alt="'+arClfTopMenu[langNo][17]+'"></a></td>');
	document.writeln('	  </tr></table></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="22"><a href="javascript:document.forms.form1.submit()" onMouseOut="outTopMenu(\'mainbar8\')" onMouseOver="overTopMenu(\'mainbar8\')"><img name="mainbar8" src="'+upOneLevelLink+imagePath+'/mainbar8.gif" border="0" alt="'+arClfTopMenu[langNo][17]+'"></a></td>');
	//document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="22"><a href="javascript:alert(errorMsg)" onMouseOut="outTopMenu(\'mainbar8\')" onMouseOver="overTopMenu(\'mainbar8\')"><img name="mainbar8" src="'+upOneLevelLink+imagePath+'/mainbar8.gif" border="0" alt="'+arClfTopMenu[langNo][17]+'"></a></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" width="65"><a href="'+upOneLevelLink+'sitemap/index.html" onMouseOut="outTopMenu(\'mainbar9\')" onMouseOver="overTopMenu(\'mainbar9\')"><img name="mainbar9" src="'+upOneLevelLink+imagePath+'/mainbar9.gif" border="0" alt="'+arClfTopMenu[langNo][18]+'"></a></td>');
	document.writeln('      <td background="'+upOneLevelLink+imagePath+'/bkgdtexture.gif" bgcolor="#FAFAEB" width="36"><a href="'+upOneLevelLink+'enquiries/index.html" onMouseOut="outTopMenu(\'mainbar10\')" onMouseOver="overTopMenu(\'mainbar10\')"><img name="mainbar10" src="'+upOneLevelLink+imagePath+'/mainbar10.gif" border="0" alt="'+arClfTopMenu[langNo][19]+'"></a></td>');
	document.writeln('    </tr>');
	document.writeln('    <tr align="left" valign="top" bgcolor="#BB3333"> ');
	document.writeln('      <td height=2 colspan="5"><img src="'+upOneLevelLink+imagePath+'/reddot.gif" width="1" height="1" alt="" border=0></td>');
	document.writeln('    </tr>');
	document.writeln('	</form>');
	document.writeln('</table>');
}
/********************* End of Function for generate the CLF top menu*********************/	


/********************* Function for generate the first level left menu*********************/	
function leftMenu()
{
	document.writeln('<table border="0" cellspacing="0" cellpadding="0">');
	document.writeln('<tr>');
	document.writeln('<td valign="top"><img src="'+upOneLevelLink+imagePath+'/pic1.jpg" alt="*"></td>');
	document.writeln('</tr>');
		for (var i in arMainTopicImage)
		{
			if (i == mainTopicNo)
			{
				if (i == 10)
				{
					document.writeln('<tr>');
					document.writeln('<td><a href="'+arMainTopicLink[i]+'map2.html" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')"><img src="'+upOneLevelLink+imagePath+'/'+leftMenuCommonImageName+arMainTopicImage[i]+leftMenuSectionImageOver+'" border="0" name="'+leftMenuCommonImageName+arMainTopicImage[i]+'" alt="'+arMainTopicAlt[langNo][i]+'"></a></td>');
					document.writeln('</tr>');
				}
				else
				{
					document.writeln('<tr>');
					document.writeln('<td><a href="'+arMainTopicLink[i]+'index.html" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')"><img src="'+upOneLevelLink+imagePath+'/'+leftMenuCommonImageName+arMainTopicImage[i]+leftMenuSectionImageOver+'" border="0" name="'+leftMenuCommonImageName+arMainTopicImage[i]+'" alt="'+arMainTopicAlt[langNo][i]+'"></a></td>');
					document.writeln('</tr>');
				}
			}
			else
			{
				if (i == 10)
				{
					document.writeln('<tr>');
					document.writeln('<td><a href="'+arMainTopicLink[i]+'map2.html" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')"><img src="'+upOneLevelLink+imagePath+'/'+leftMenuCommonImageName+arMainTopicImage[i]+leftMenuSectionImageOut+'" border="0" name="'+leftMenuCommonImageName+arMainTopicImage[i]+'" alt="'+arMainTopicAlt[langNo][i]+'"></a></td>');
					document.writeln('</tr>');
				}
				else
				{
					document.writeln('<tr>');
					document.writeln('<td><a href="'+arMainTopicLink[i]+'index.html" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[i]+'\')"><img src="'+upOneLevelLink+imagePath+'/'+leftMenuCommonImageName+arMainTopicImage[i]+leftMenuSectionImageOut+'" border="0" name="'+leftMenuCommonImageName+arMainTopicImage[i]+'" alt="'+arMainTopicAlt[langNo][i]+'"></a></td>');
					document.writeln('</tr>');
				}
			}
		}
      document.writeln('<tr>');
      document.writeln('<td valign="top"><img src="'+upOneLevelLink+imagePath+'/topic_bottom.gif" alt="*"></td>');
      document.writeln('</tr>');
      document.writeln('</table>');
}
/********************* End of Function for generate the first level left menu*********************/	

/********************* Function for generate the heading image for first level title*********************/	
function heading()
{
	document.writeln('	  <table width="100%" border="0" cellspacing="0" cellpadding="0">');
	document.writeln('		<tr align="left" valign="top"> ');
	if (mainTopicNo != 0){	document.writeln('		  <td width="100%"><img src="'+upOneLevelLink+imagePath+'/'+headingCommonImageName+arMainTopicImage[mainTopicNo]+'.gif" alt="'+arMainTopicAlt[langNo][mainTopicNo]+'"></td>');}
	else{	document.writeln('		  <td width="100%"><img src="'+upOneLevelLink+imagePath+'/'+headingCommonImageName+arOtherTopicImage[otherTopicNo]+'.gif" alt="'+arOtherTopicAlt[langNo][otherTopicNo]+'"></td>');}
	document.writeln('        </tr>');
	document.writeln('	  </table>');
}
/********************* End of Function for generate the heading image for first level title*********************/	

/********************* Function for generate the second level title*********************/	
function subSectionTitle()
{
	if (subTopic!="" && subTopic!=0){document.writeln('<p class="page_title">'+arSubTopicAlt[langNo][mainTopicNo][subTopic]+'</p>');}
}
/********************* End of Function for generate the second level title*********************/	

/********************* Function for generate the footer*********************/	
function footer()
{

	if (revisionDate==''||revisionDate=='MM/DD/YYYY') revisionDate='06/11/2004';

	var monthArray=new Array();
	monthArray[0]='January';
	monthArray[1]='February';
	monthArray[2]='March';
	monthArray[3]='April';
	monthArray[4]='May';
	monthArray[5]='June';
	monthArray[6]='July';
	monthArray[7]='August';
	monthArray[8]='September';
	monthArray[9]='October';
	monthArray[10]='November';
	monthArray[11]='December';

	var cMonthArray=new Array();
	cMonthArray[0]='1';
	cMonthArray[1]='2';
	cMonthArray[2]='3';
	cMonthArray[3]='4';
	cMonthArray[4]='5';
	cMonthArray[5]='6';
	cMonthArray[6]='7';
	cMonthArray[7]='8';
	cMonthArray[8]='9';
	cMonthArray[9]='10';
	cMonthArray[10]='11';
	cMonthArray[11]='12';

	var reDate=new Date(Date.parse(revisionDate))
	var showDate1=reDate.getDate()+' '+monthArray[reDate.getMonth()]+' '+reDate.getFullYear();
	var showDate2=reDate.getFullYear()+' 年 '+cMonthArray[reDate.getMonth()]+' 月 '+reDate.getDate()+' 日';

	document.writeln('	  <table width="100%" border="0" cellspacing="0" cellpadding="0">');
	document.writeln('        <tr align="left" valign="top"> ');
	document.writeln('          <td><img src="'+upOneLevelLink+imagePath+'/spacer.gif" width="20" height="20" alt=""></td>');
	document.writeln('          <td width="100%">');
	document.writeln('		  <table border=0 cellpadding=0 celspacing=0 width="100%">');
	document.writeln('			<tr>');
	document.writeln('				<td colspan=2><img src="'+upOneLevelLink+imagePath+'/spacer.gif" width="20" height="20" alt=""></td>');
	document.writeln('			</tr>');
/*	document.writeln('			<tr>');
	document.writeln('				<td colspan=2><p align="right"><img src="'+upOneLevelLink+imagePath+'/spacer.gif" alt="'+arFooter[langNo][3]+'" border="0" name="backtotopspacer" height="26" width="26"></p></td>');
	document.writeln('			</tr>');
	document.writeln('			<tr>');
	document.writeln('				<td colspan=2><img src="'+upOneLevelLink+imagePath+'/spacer.gif" width="20" height="20" alt=""></td>');
	document.writeln('			</tr>');*/
	document.writeln('			<tr>');
	document.writeln('				<td colspan=2 background="'+upOneLevelLink+imagePath+'/botdot.jpg"><img src="'+upOneLevelLink+imagePath+'/botdot.jpg" alt="" border=0></td>');
	document.writeln('			</tr>');
	document.writeln('			<tr>');
//	document.writeln('				<td class="footer">2004<img src="'+upOneLevelLink+imagePath+'/copy.gif" alt="" border=0> | <a href="javascript:MM_openBrWindow(\''+upOneLevelLink+'notice.html\', \'popup1\', \'width=400, height=300, scrollbars=yes\')" class="notices">'+arFooter[langNo][1]+'</a></td>');
	document.writeln('				<td class="footer">2004<img src="'+upOneLevelLink+imagePath+'/copy.gif" alt="" border=0> | <a href="javascript:MM_openBrWindow(\''+upOneLevelLink+'notice.html\', \'popup1\', \'menubar=no,toolbar=no,scrollbars=yes,width=400,height=300\')" class="notices">'+arFooter[langNo][1]+'</a></td>');
	if (langNo==1)
		document.writeln('				<td align=right class="reDate">'+arFooter[1][2]+showDate1+'</td>');
	else
		document.writeln('				<td align=right class="reDate">'+arFooter[2][2]+showDate2+'</td>');
//	document.writeln('				<td align=right class="reDate">'+arFooter[langNo][2]+showDate1+'</td>');
	document.writeln('			</tr>');
	document.writeln('			</table>');
	document.writeln('		  </td>');
	document.writeln('		  <td><img src="'+upOneLevelLink+imagePath+'/spacer.gif" width="10" height="1" alt=""></td>');
	document.writeln('        </tr>');
	document.writeln('      </table>');
}
/********************* End of Function for generate the footer*********************/	

/********************* Function for generate the second level layer*********************/	
function genLayer()
{

	for (var j in arMainTopicImage)
	{
		if (arSubTopicImage[j]!=null)
		{
			arLayer[arLayer.length] = leftMenuCommonImageName+arMainTopicImage[j]
			//Start Layer
			if (document.layers)
			{document.writeln('<layer name='+leftMenuCommonImageName+arMainTopicImage[j]+'_layer top=0 left=0 width=150 height=58 visibility="hide" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[j]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[j]+'\')">');}
			else
			{document.writeln('<div id="'+leftMenuCommonImageName+arMainTopicImage[j]+'_layer" style="position:absolute; left:0; top:0; width:150; height:58; z-index:2; visibility: hidden"> ');}
			
			//content for Layers
			document.writeln('<table width="100%" border="0" cellspacing="0" cellpadding="0" onMouseOver="leftMenuMouseOver(\''+leftMenuCommonImageName+arMainTopicImage[j]+'\')" onMouseOut="leftMenuMouseOut(\''+leftMenuCommonImageName+arMainTopicImage[j]+'\')">');
			
			for (var k in arSubTopicImage[j])
			{
				document.writeln('<tr valign=top>');
				document.writeln('	<td><a href="'+arMainTopicLink[j]+arSubTopicLink[j][k]+'" onMouseOver="layerMouseOver(\''+leftMenuCommonImageName+arSubTopicImage[j][k]+'\', \''+leftMenuCommonImageName+arMainTopicImage[j]+'_layer\')" onMouseOut="layerMouseOut(\''+leftMenuCommonImageName+arSubTopicImage[j][k]+'\', \''+leftMenuCommonImageName+arMainTopicImage[j]+'_layer\')"><img src="'+upOneLevelLink+imagePath+'/layer/'+leftMenuCommonImageName+arSubTopicImage[j][k]+leftMenuSectionImageOut+'" alt="'+arSubTopicAlt[langNo][j][k]+'" border="0" name="'+leftMenuCommonImageName+arSubTopicImage[j][k]+'"></a></td>');
				document.writeln('</tr>');
			}
			document.writeln('</table>');
			
			//Close Layer
			if (document.layers)
			{document.writeln('</layer>');}
			else
			{document.writeln('</div>');}
		}
	}
	//Back to top layer
/*	var footerY, footerVisibility;
	if (document.all){footerY=getDim(document.images.backtotopspacer).y; if (footerY > 630) footerVisibility = "visible"; else footerVisibility="hidden"}
	if (document.layers){footerY=document.images.backtotopspacer.y; if (footerY > 630) footerVisibility = "true"; else footerVisibility="hide"}
	if (!document.all && document.getElementById) {footerY=document.images.backtotopspacer.y; if (footerY > 630) footerVisibility = "visible"; else footerVisibility="hidden"}
	if (document.layers)
		{document.writeln('<layer name=footer_layer top=' + footerY + ' left=734 width=26 height=26 visibility="' + footerVisibility + '">');}
	else
		{document.writeln('<div id="footer_layer" style="position:absolute; left:734; top:' + footerY + '; width:26; height:26; z-index:1; visibility: ' + footerVisibility + '"> ');}
	document.writeln('<table width="100%" border="0" cellspacing="0" cellpadding="0"  onmouseover="MM_swapImage(\'backtotopfoot\',\'\',\''+upOneLevelLink+imagePath+'/btn_top_h.gif\',1)" onMouseOut="MM_swapImgRestore();">');
	document.writeln('<tr valign=top>');
	document.writeln('	<td><a href="#top" onmouseover="MM_swapImage(\'backtotopfoot\',\'\',\''+upOneLevelLink+imagePath+'/btn_top_h.gif\',1)" onMouseOut="MM_swapImgRestore();"><img src="'+upOneLevelLink+imagePath+'/btn_top_n.gif" alt="'+arFooter[langNo][3]+'" border="0" name="backtotopfoot" width="26" height="26"></a></p></td>');
	document.writeln('</tr>');
	document.writeln('</table>');
	if (document.layers)
		{document.writeln('</layer>');}
	else
		{document.writeln('</div>');}*/

	setLayerPosition()
}
/********************* Function for generate the second level layer*********************/	

/********************* Function for generate the sitemap*********************/	
function genSiteMap()
{
	for (var j in arMainTopicImage)
		{
			document.writeln('<p><a href="'+arMainTopicLink[j]+'index.html">'+arMainTopicAlt[langNo][j]+'</a></p>');
			if (arSubTopicImage[j]!=null)
			{
				document.writeln('<ul>');
				for (var k in arSubTopicImage[j])
				{
					document.writeln('<li><a href="'+arMainTopicLink[j]+arSubTopicLink[j][k]+'">'+arSubTopicAlt[langNo][j][k]+'</a></li>');
				}
				document.writeln('</ul>');
			}
		}
}
/********************* End of Function for generate the sitemap*********************/	

/********************* Function for generate the page title*********************/	
var tempTitle2 = ""	
	
function genTitle()
{
	var tempTitle = arPageTitle[langNo][1] + " - ";
	if (mainTopicNo != 0){tempTitle += arMainTopicAlt[langNo][mainTopicNo];}
	else{tempTitle += arOtherTopicAlt[langNo][otherTopicNo];}
	
	if (subTopic!="" && subTopic!=0){tempTitle += " - " + arSubTopicAlt[langNo][mainTopicNo][subTopic]}
	//document.title = tempTitle;
	tempTitle2 = tempTitle
	
}
/********************* End of Function for generate the page title*********************/	

function genSearchForm()
{
	document.writeln('<form name="searchForm" method="get" action="'+arClfTopMenu[langNo][1]+'">');
	document.writeln('	<INPUT name=mode type=hidden value='+arClfTopMenu[langNo][2]+'>');
	document.writeln('  <INPUT name=la type=hidden value=1>');
	document.writeln('  <INPUT name=gr_1 type=hidden value="tar">');
	document.writeln('	<INPUT name=ma type=hidden value=100>');
	document.writeln('	<INPUT name=ft_1 type=hidden value="alltype">');
	document.writeln('	<INPUT name=so type=hidden value=0>');
	document.writeln('	<INPUT name=nu type=hidden value=10>');
	document.writeln('	<INPUT name=ca type=hidden value=0>');
	document.writeln('	<INPUT name=ta type=hidden value="all">');
	document.writeln('	<INPUT name=fu type=hidden value="">');
	document.writeln('	<INPUT name=fd type=hidden value="">');
	document.writeln('	<INPUT name=demo type=hidden value="'+demo+'">');
}

/********************* Function for set the layer position*********************/	
function setLayerPosition()
{
	for (var i in arLayer)
	{
			 if (document.all){moveDivs(document.all[arLayer[i]+"_layer"].style, getDim(document.images[arLayer[i]]).y);}
			 if (document.layers){moveDivs(document.layers[arLayer[i]+"_layer"], document.images[arLayer[i]].y);}
			 if (!document.all && document.getElementById) {moveDivs(document.getElementById(arLayer[i]+"_layer").style, document.images[arLayer[i]].y);}
	}
}
/********************* End of Function for set the l;ayer position*********************/	

function preload_image() {

	if ( document.images ){
		var preload = new Array()
		preload[0] = upOneLevelLink+imagePath+"/mainbar1_f2.gif";
		preload[1] = upOneLevelLink+imagePath+"/mainbar2_f2.gif";
		preload[2] = upOneLevelLink+imagePath+"/mainbar3_f2.gif";
		preload[3] = upOneLevelLink+imagePath+"/mainbar4_f2.gif";
		preload[4] = upOneLevelLink+imagePath+"/mainbar5_f2.gif";
		preload[5] = upOneLevelLink+imagePath+"/mainbar6_f2.gif";
		preload[6] = upOneLevelLink+imagePath+"/mainbar8_f2.gif";
		preload[7] = upOneLevelLink+imagePath+"/mainbar9_f2.gif";
		preload[8] = upOneLevelLink+imagePath+"/mainbar10_f2.gif";
		preload[9] = upOneLevelLink+imagePath+"/btn_top_h.gif";
		preload[10] = upOneLevelLink+imagePath+"/btn_back_h.gif";
		preload[11] = upOneLevelLink+imagePath+"/btn_next_h.gif";
		preload[12] = upOneLevelLink+imagePath+"/btn_backtosearch_h.gif";
		preload[13] = upOneLevelLink+imagePath+"/btn_submit_n.gif";
		
		var jCounter = preload.length
		for (var j in arMainTopicImage)
		{
			preload[jCounter] = upOneLevelLink+imagePath+"/"+leftMenuCommonImageName+arMainTopicImage[j]+leftMenuSectionImageOver
			jCounter = jCounter + 1
			if (arSubTopicImage[j]!=null)
			{
				for (var k in arSubTopicImage[j])
				{
					preload[jCounter] = upOneLevelLink+imagePath+"/"+leftMenuCommonImageName+arSubTopicImage[j][k]+leftMenuSectionImageOver
					jCounter = jCounter + 1
				}
			}
		}
		
		for ( var i in preload ){
			var I = new Image();
			I.src = preload[i];
			preload[i] = I
		}
		
		if (!document.all&&document.getElementById){setLayerPosition();genTitle();}
		if (document.all){setLayerPosition();genTitle();}
		if (document.layers){setLayerPosition();genTitle();}
	}
}
