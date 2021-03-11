//Use for check the style sheet
var lang = "eng";
var rootPath = "";
var upOneLevelLink = "../";
var upTwoLevelLink = "../../";
var upThreeLevelLink = "../../../";
var upRootLink = "";
var external = false;
var rootFolder = "";
var demo = false;
var govTestSite = false;
var govKanHan = true;

if(document.URL.toString().search('test2.westcomzivo.com') != -1){demo = true}
else if (document.URL.toString().search('test.') != -1){demo = true}
else if (document.URL.toString().search('www0.') != -1){demo = true}
else {demo = false}

if(document.URL.toString().search('westcomzivo') != -1){govTestSite = false}
else if (document.URL.toString().search('gov.hk') != -1){govTestSite = true}
//else {false = false}