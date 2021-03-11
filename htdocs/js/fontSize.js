/**
 * Created by daleqq on 14/3/2017.
 */

$(document).ready(function () {
     var fs = get_cookie('fontsize');
    if(fs != null){
        changeFontSize(fs);
    }else{
        changeFontSize('0');
    }
    externallinks();
    imageTitle();
});

function initfontsize()
{
     var fs = get_cookie('fontsize');

    if(fs != null){
        changeFontSize(fs);
    }else{
        changeFontSize('0');
    }
    externallinks();
    imageTitle();
}

function externallinks() {
    if (!document.getElementsByTagName) return;
    var anchors = document.getElementsByTagName("a");
    for (var i=0; i<anchors.length; i++) {
        var anchor = anchors[i];
        if (anchor.getAttribute("href") &&
            anchor.getAttribute("rel") == "external")
            anchor.target = "_blank";
    }
}

function imageTitle() {
    if (!document.getElementsByTagName) return;
    var anchors = document.getElementsByTagName("img");
    for (var i=0; i<anchors.length; i++) {
        var anchor = anchors[i];
        if ( !anchor.getAttribute("title"))
            anchor.title = anchor.alt;
    }
}

var cdomain = (location.domain) ? location.domain : null;

function changeFontSize(fs)
{
//    // set_cookie('fontsize',fs,2110,12,12,"/",cdomain);
//    //var fontSize = "100%";
//    var fontSize = "12px";
//    if(fs==="1"){
//        //fontSize="121%";	// (1.21x)
//        fontSize = 12*1.25 + "px";
//        document.getElementById("fontSizeM").style.color = "black";
//        document.getElementById("fontSizeL").style.color = "red";
//        document.getElementById("fontSizeXL").style.color = "black";
//    }else if(fs==="2"){
//        //fontSize="144%"; // (1.44x)
//        fontSize = 12*1.5 + "px";
//        document.getElementById("fontSizeM").style.color = "black";
//        document.getElementById("fontSizeL").style.color = "black";
//        document.getElementById("fontSizeXL").style.color = "red";
//
//    }else{
//        document.getElementById("fontSizeM").style.color = "red";
//        document.getElementById("fontSizeL").style.color = "black";
//        document.getElementById("fontSizeXL").style.color = "black";
//    }
//    $("body").css("fontSize", fontSize);
	
	set_cookie('fontsize',fs,2110,12,12,"/",cdomain);
	var fontSize = "16px";

	if(fs=="1"){
		fontSize="18px";	// (1.21x)
		//$("div#smallfont").css('background', 'url("img/small_a.png")');
		//$("div#middlefont").css('background', 'url("img/middle_a_f2.png")');
		//$("div#largestfont").css('background', 'url("img/largest_a.png")');
	}else if(fs=="2"){
		fontSize="20px"; // (1.44x)C
		//$("div#smallfont").css('background', 'url("img/small_a.png")');
		//$("div#middlefont").css('background', 'url("img/middle_a.png")');
		//$("div#largestfont").css('background', 'url("img/largest_a_f2.png")');
	}else{
		fontSize="16px";
        //$("div#smallfont").css('background', 'url("img/small_a_f2.png")');
		//$("div#middlefont").css('background', 'url("img/middle_a.png")');
		//$("div#largestfont").css('background', 'url("img/largest_a.png")');

	}
	window.fs = fs;
	var x = document.getElementsByClassName("autosize");
    for (var i = 0; i < x.length; i++) {
		x[i].style.fontSize=fontSize;
    }
	
	if(fs=="1"){
		$("div#smallfont").css('color','black');
		$("div#middlefont").css('color','red');
		$("div#largestfont").css('color','black');
	}else if(fs=="2"){
		$("div#smallfont").css('color','black');
		$("div#middlefont").css('color','black');
		$("div#largestfont").css('color','red');
	}else{
		$("div#smallfont").css('color','red');
		$("div#middlefont").css('color','black');
		$("div#largestfont").css('color','black');
	}
}

function get_cookie ( cookie_name )
{
    var results = document.cookie.match('(^|;)?' + cookie_name + '=([^;]*)(;|$)');
    if ( results )
        return ( unescape ( results[2] ) );
    else
        return null;
}

function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
    var cookie_string = name + "=" + escape ( value );

    if ( exp_y )
    {
        var expires = new Date ( exp_y, exp_m, exp_d );
        cookie_string += "; expires=" + expires.toGMTString();
    }

    if ( path )
        cookie_string += "; path=" + escape ( path );

    if ( domain )
        cookie_string += "; domain=" + escape ( domain );

    if ( secure )
        cookie_string += "; secure";

    document.cookie = cookie_string;
}