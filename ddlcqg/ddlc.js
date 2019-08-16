var setside = "textr";
var textflip = 1;
var namesave = "START";

var namestyle = "ddlcclassicname";
var textstyle = "ddlcclassictext";

var searcharray = [];	

var mcvar = "MC"

var crusr = "The Player"

var lastquote = -1;
var lastact = "act1";

var chartextcols = 1;

var ddlcarray = [];	
	
$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});
	
//return data
$.getJSON("ddlc.json", function(data) {

	if (data == null) {
		return false;
	}
		
	$.each(data.data, function(i, field) {
		ddlcarray.push(field);
	});	
		
		
}).fail(function(jqxhr, textStatus, error) {
	console.log(error);
}).then(function(){
 
	$(document).ready(function() {
			
		var fbtn = document.getElementById("flipBtn");
		var fbox = document.getElementById("flipBox");
		var textcolbtn = document.getElementById("colBtn");
		var textcolbox = document.getElementById("colBox");
		var ddact = document.getElementById("DDact");
		var inMC = document.getElementById("inMCname");
		var inSearch = document.getElementById("inSearch");
		
		var a = document.getElementById("genDDLC");
		a.onclick = function(){
			document.getElementById("bg").className = "cutopacity";
			selact = ddact.options[ddact.selectedIndex].value;
			mcvar = inMC.value
			quote(selact,"RAND",1);
			return false;
		}
		
		var a = document.getElementById("nextDDLC");
		a.onclick = function(){
			document.getElementById("bg").className = "cutopacity";
			selact = ddact.options[ddact.selectedIndex].value;
			mcvar = inMC.value
			quote(selact,"ORD",1);
			return false;
		}
		
		var a = document.getElementById("serDDLC");
		a.onclick = function(){
			document.getElementById("bg").className = "cutopacity";
			selact = ddact.options[ddact.selectedIndex].value;
			mcvar = inMC.value
			quote(selact,inSearch.value,1);
			return false;
		}
		
		var a = document.getElementById("clearDDLC");
		a.onclick = function() {
			$("#ddlc").html("");
			document.getElementById("bg").className = "fullopacity";
			setside = "textr";
			namesave = "START";			
			return false;
		}
			
		var a = document.getElementById("aboutDDLC");
		a.onclick = function(){
			document.getElementById("bg").className = "cutopacity";
			$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname ddlcERRORname\">About:</span><br><span class=\"ddlctext ddlcJUSTtext\">Hi, welcome to the DDLC Quote Generator! - created by <a href=\"https://www.ohnoitsAvon.co.uk\" target=\"_blank\">ohnoitsAvon</a><br><br>This website lets you generate random quotes from DDLC. It also lets you search for your favourite quotes.<br><br>With this tool you can:<br><br>Generate random quotes<br>Get the next quote (in order)<br>Search for quotes by Character, word or phrase<br>Choose the act to get quotes from<br>Change the name of the MC<br>Turn on or off custom colours<br>Enable or disable automatic text alignment.<br><br>Searching for the character names will display quotes from the chosen character:<br>Sayori, Natsuki, Yuri, Monika, MC,<br>or TXT for the narrator text.<br><br>If you would like to search for a quote that mentions the character add a / before the name:<br>e.g. /Monika<br><br>Adding a / before other search terms allows you to search within words: e.g. searching for \"lit\" will return no results but searching for \"/lit\" will return literature, little etc.<br><br>This is a Doki Doki Literature Club fan made utility that is not affiliated with Team Salvato.<br>It is designed to be used only after the official game has been completed.<br>You can download Doki Doki Literature Club at: <a href=\"http://ddlc.moe\" target=\"_blank\">http://ddlc.moe</a><br><br>Click \"Random Quote\" to get started.</span></p>")
			window.scrollTo(0,document.body.scrollHeight);
			return false;
		}
			
		a.click();
		
		var a = document.getElementById("moreDDLC");
		a.onclick = function(){
			document.getElementById("closeoptions").className = "show";	
			document.getElementById("moreoptions").className = "inner2 hidden2";	
		}
		
		var a = document.getElementById("closeoptions");
		a.onclick = function(){
			document.getElementById("closeoptions").className = "hidden";	
			document.getElementById("moreoptions").className = "inner2 show2";	
		}
		
		fbtn.onclick = function() {
			if (textflip == 1)
			{
				textflip = 0;					
				fbtn.className = "inner clicked ddlcJUSTtext";	
				fbox.className = "checkb inactive";				
			}
			else
			{
				textflip = 1;	
				namesave = "START";				
				fbtn.className = "inner ddlcclassictext";	
				fbox.className = "checkb active";			
			}
		}
		
		
		textcolbtn.onclick = function() {
			if (chartextcols == 1)
			{
				chartextcols = 0;				
				textcolbtn.className = "inner clicked ddlcJUSTtext";	
				textcolbox.className = "checkb inactive";					
			}
			else
			{
				chartextcols = 1;							
				textcolbtn.className = "inner ddlcclassictext";	
				textcolbox.className = "checkb active";		
			}
		}

		
	});
	
});

function quote(act, chr, length) {	
	var i;
	var tempact;
	var randact = 0;
	var quoteno;
	searcharray = [];	
	
	var act1cut = ddlcarray[0].act1.length;
	var act2cut = act1cut + ddlcarray[0].act2.length;
	var act3cut = act2cut + ddlcarray[0].act3.length;
	var act4cut = act3cut + ddlcarray[0].act4.length;
	
	switch (act) {
	  case "A":
		randact = 1
		break;
	  case "1":
		tempact = "act1";
		break;
	  case "2":
		tempact = "act2";
		break;
	  case "3":
		tempact = "act3";
		break;
	  case "4":
		tempact = "act4";
		break;
	}
	
	for (i = 0; i < length; i++) {	
		if (randact == 1) {
			var intact = getRandomInt(4);
			switch (intact) {
				case 0:
					tempact = "act1";
					break;
				case 1:
					tempact = "act2";
					break;
				case 2:
					tempact = "act3";
					break;
				case 3:
					tempact = "act4";
					break;
				default:
					break;
			}	
		}	
			
		switch (chr.toUpperCase()) {
		  case "ORD":
		    
			switch (lastact) {
			case "act1":
			case "act2":
			case "act3":
			case "act4":
			break;
			default:
				lastact = "act1";
				lastquote = -1;
			}	
			
			do {
			  var breakout = 0;
				lastquote = lastquote + 1; 
				
				if (lastquote == ddlcarray[0][lastact].length)
				{
					switch (lastact) {
					case "act1":
						lastact = "act2";
						lastquote = 0;
						break;
					case "act2":
						lastact = "act3";
						lastquote = 0;
						break;
					case "act3":
						lastact = "act4";
						lastquote = 0;
						break;
					case "act4":
						lastact = "act1";
						lastquote = 0;
						break;
					default:
						lastact = "act1";
						lastquote = 0;
						break;
					}	
				}
				
				switch (ddlcarray[0][lastact][lastquote].substr(2)) {
				case "Sorry, I'm not in this act...":
				  break;
				case "We dont speak together in this act!":
				  break;
				default:
				  breakout = 1;
				}
			}
			while (breakout < 1);
			
			typequote(lastact, lastquote);	
			break;
		  case "RAND":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  
				switch (ddlcarray[0][tempact][quoteno].substr(2)) {
				  case "Sorry, I'm not in this act...":
				  case "We dont speak together in this act!":
				  case "Ĺý¼¹ŨļŏĬÏŸŗ°ĥŚěĲÝĂō¯ÀœÀņŢŴūĶŲĠşı¦¾ŋũ´À¥¸¢ĢļĎźũÝĸŌŞţëġŁŐÂÉĤĐ·ċ": 		//s
				  case "ÔŭÐŠÒĝĒåŹóÑÿŖĦºūůŜ¤ÍŝŽÛìĎũ½ÅµþĞÎŴġäĭ³®ŭÒ§ĵů£ţćŽďųŮğŖĦĴŀį·ųþğâ":			//s
				  case "ÕóŊ¦ªĘąŷÞÈÿûůœŅŐÁ°¼Ġ¯ÊŋÁ¹Ŏ·£èğČŦĴ³Ðå¢ŞħźšŎŤëÈĉ°±ĻéĀõ÷Àľć¤¦čĮĦ":			//s
				  case "£ŨşğŗōŖýũ¾ŨĥŋćÝÏţĂįŖěŏ¯¦ĶļņŸďÀųğŢþŴĬ·ļ¹ŚÀĴœųŖŮūĦŲŗ°ŽĬıŀĠĹŸŏ¹¼âÏĲ":  //n
				  case "þūĶ¦ŏļÏŚŗÝœÏ¹ŖćĥĴŨĬŮĲōįŲ¯ıŀŗŨŸŖ¾ţļņğýŸ·ŢĬŋĠğě¹Ŵũųâ°ųďŽŏŖ¼şĹĦÀĂ£À":  //n
				  case "T3BlbiBZb3VyIFRoaXJkIEV5ZQ==":			//n
				  case "SSBjYW4gZmVlbCB0aGUgdGVuZGVybmVz":      //n
				  case "cyBvZiBoZXIgc2tpbiB0aHJvdWdoIHRo":      //n
				  case "ZSBrbmlmZSwgYXMgaWYgaXQgd2VyZSBh":      //n
				  case "biBleHRlbnNpb24gb2YgbXkgc2Vuc2Ug":      //n
				  case "b2YgdG91Y2guIE15IGJvZHkgbmVhcmx5":      //n
				  case "IGNvbnZ1bHNlcy4gVGhlcmUncyBzb21l":      //n
				  case "dGhpbmcgaW5jcmVkaWJseSBmYWludCwg":      //n
				  case "ZGVlcCBkb3duLCB0aGF0IHNjcmVhbXMg":      //n
				  case "dG8gcmVzaXN0IHRoaXMgdW5jb250cm9s":      //n
				  case "bGFibGUgcGxlYXN1cmUuIEJ1dCBJIGNh":      //n
				  case "biBhbHJlYWR5IHRlbGwgdGhhdCBJJ20g":      //n
				  case "YmVpbmcgcHVzaGVkIG92ZXIgdGhlIGVk":      //n
				  case "Z2UuIEkgY2FuJ3QuLi5JIGNhbid0IHN0":      //n
				  case "b3AgbXlzZWxmLg==":                      //n
				  case "ýĹğŖþŀ£ŢįâĴŚŖŨţųŋıŨŽņÀďŸÀ¦ćěĬļ¾ş°ŮŏŲō¹ĬļÏųĲŸūĠŗŖ·ŴĦĂÏŗũŏ¼¹ğœĶÝ¯ĥ": //y
				  case "ō·ļĲ¼Ġ¯ŸļŮŢćĬğŨŗŋŗœŴũĶŖņŲŚŖÏŀŨūýĂų¾Ýď¹ĬÏŏþĥŸěŽųğĦĴÀ£â°Ŗį¹ş¦ÀţĹıŏ": //y
				  case "ŏŽ¦ŀĥųūųĲŗŲŸļŨŴŖŗŨŏĂũş·ŖœŋļņğŸ¼ćĬ¹ě£ÀÀĹį¹ÏĬýōĶ¯ŖğâĦĠÝÏţŚþďı¾°ŢĴŮ": //y
				  case "Ï¹ÀŏŚÀýĶŖþğŨÝŋįěğĴ·ųŗŏ¯ŮņĬÏĥŗŲĲţōŢŸćŴâũĦŖœļŽĬŨŸ¾ŀşĠĂı¼¹ĹŖū°ļų¦ď£": //-
				  case "ĬÏŸŗğŖĦĴŀį¯ÀœÀņŢŴūĶŲĠşıćŽ·ųþŖĹý¼¹Ũļŏ°ĥŚěĲÝĂōďųŮğŖ¹ŨļŏĬÏŸŗâ¦¾ŋũ£ţ": //M
				  case "ĬĥŚěĲÝĂōďųŮğŖ¹ÏŸŗğŖĦĴŀį¯ÀœÀņŢŴūĶŲĠşıćŽ·ųþŖĹý¼¹Ũļŏ°ŨļŏĬÏŸŗâ¦¾ŋũ£ţ": //M
				  case "ğŖĦĴŀį·ųþŖĹý¼¹ŨļŏĬÏŸŗ°ĥŚěĲÝĂō¯ÀœÀņŢŴūĶŲĠşı¦¾ŋũ£ţćŽďųŮğŖ¹ŨļŏĬÏŸŗâ": //s
					break;	
				  default:
				    breakout = 1;
				}
			  
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "S":
		  case "SAYORI":
 		    do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "S") { 
			    if (randact == 1) {	
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {
					  case "Sorry, I'm not in this act...":
					  case "Ĺý¼¹ŨļŏĬÏŸŗ°ĥŚěĲÝĂō¯ÀœÀņŢŴūĶŲĠşı¦¾ŋũ´À¥¸¢ĢļĎźũÝĸŌŞţëġŁŐÂÉĤĐ·ċ": 		//s
					  case "ÔŭÐŠÒĝĒåŹóÑÿŖĦºūůŜ¤ÍŝŽÛìĎũ½ÅµþĞÎŴġäĭ³®ŭÒ§ĵů£ţćŽďųŮğŖĦĴŀį·ųþğâ":			//s
					  case "ÕóŊ¦ªĘąŷÞÈÿûůœŅŐÁ°¼Ġ¯ÊŋÁ¹Ŏ·£èğČŦĴ³Ðå¢ŞħźšŎŤëÈĉ°±ĻéĀõ÷Àľć¤¦čĮĦ":			//s
					  case "ğŖĦĴŀį·ųþŖĹý¼¹ŨļŏĬÏŸŗ°ĥŚěĲÝĂō¯ÀœÀņŢŴūĶŲĠşı¦¾ŋũ£ţćŽďųŮğŖ¹ŨļŏĬÏŸŗâ":      //s
						tempact = "act1";
						break;	
					  default:
						breakout = 1;
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "Y":
		  case "YURI":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "Y") { 
			    if (randact == 1) {
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {
					  case "Sorry, I'm not in this act...":				 
					  case "ýĹğŖþŀ£ŢįâĴŚŖŨţųŋıŨŽņÀďŸÀ¦ćěĬļ¾ş°ŮŏŲō¹ĬļÏųĲŸūĠŗŖ·ŴĦĂÏŗũŏ¼¹ğœĶÝ¯ĥ": //y
					  case "ō·ļĲ¼Ġ¯ŸļŮŢćĬğŨŗŋŗœŴũĶŖņŲŚŖÏŀŨūýĂų¾Ýď¹ĬÏŏþĥŸěŽųğĦĴÀ£â°Ŗį¹ş¦ÀţĹıŏ": //y
					  case "ŏŽ¦ŀĥųūųĲŗŲŸļŨŴŖŗŨŏĂũş·ŖœŋļņğŸ¼ćĬ¹ě£ÀÀĹį¹ÏĬýōĶ¯ŖğâĦĠÝÏţŚþďı¾°ŢĴŮ": //y
						tempact = "act1";
						break;	
					  default:
						breakout = 1;
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "N":
		  case "NATSUKI":
		    do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "N") { 
			    if (randact == 1) {
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {
					  case "Sorry, I'm not in this act...":				 
					  case "£ŨşğŗōŖýũ¾ŨĥŋćÝÏţĂįŖěŏ¯¦ĶļņŸďÀųğŢþŴĬ·ļ¹ŚÀĴœųŖŮūĦŲŗ°ŽĬıŀĠĹŸŏ¹¼âÏĲ":  //n
					  case "þūĶ¦ŏļÏŚŗÝœÏ¹ŖćĥĴŨĬŮĲōįŲ¯ıŀŗŨŸŖ¾ţļņğýŸ·ŢĬŋĠğě¹Ŵũųâ°ųďŽŏŖ¼şĹĦÀĂ£À":  //n
					  case "T3BlbiBZb3VyIFRoaXJkIEV5ZQ==":			//n
					  case "SSBjYW4gZmVlbCB0aGUgdGVuZGVybmVz":      //n
					  case "cyBvZiBoZXIgc2tpbiB0aHJvdWdoIHRo":      //n
					  case "ZSBrbmlmZSwgYXMgaWYgaXQgd2VyZSBh":      //n
					  case "biBleHRlbnNpb24gb2YgbXkgc2Vuc2Ug":      //n
					  case "b2YgdG91Y2guIE15IGJvZHkgbmVhcmx5":      //n
					  case "IGNvbnZ1bHNlcy4gVGhlcmUncyBzb21l":      //n
					  case "dGhpbmcgaW5jcmVkaWJseSBmYWludCwg":      //n
					  case "ZGVlcCBkb3duLCB0aGF0IHNjcmVhbXMg":      //n
					  case "dG8gcmVzaXN0IHRoaXMgdW5jb250cm9s":      //n
					  case "bGFibGUgcGxlYXN1cmUuIEJ1dCBJIGNh":      //n
					  case "biBhbHJlYWR5IHRlbGwgdGhhdCBJJ20g":      //n
					  case "YmVpbmcgcHVzaGVkIG92ZXIgdGhlIGVk":      //n
					  case "Z2UuIEkgY2FuJ3QuLi5JIGNhbid0IHN0":      //n
					  case "b3AgbXlzZWxmLg==":                      //n
						tempact = "act1";
						break;	
					  default:
						breakout = 1;
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "M":
		  case "MONIKA":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "M") { 
				if (randact == 1) {
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {	 
					  case "ĬÏŸŗğŖĦĴŀį¯ÀœÀņŢŴūĶŲĠşıćŽ·ųþŖĹý¼¹Ũļŏ°ĥŚěĲÝĂōďųŮğŖ¹ŨļŏĬÏŸŗâ¦¾ŋũ£ţ": //M
					  case "ĬĥŚěĲÝĂōďųŮğŖ¹ÏŸŗğŖĦĴŀį¯ÀœÀņŢŴūĶŲĠşıćŽ·ųþŖĹý¼¹Ũļŏ°ŨļŏĬÏŸŗâ¦¾ŋũ£ţ": //M
						tempact = "act1";
						break;	
					  default:
						breakout = 1;
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "NY":
		  case "NATSUKI & YURI":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "Z") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "We dont speak together in this act!") 
					{
						breakout = 1;
					}
					else
					{
						tempact = "act1";
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "MC":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "P") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Sorry, I'm not in this act...") 
					{
						breakout = 1;
					}
					else
					{
						tempact = "act1";
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "TXT":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "-") { 
				if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Ï¹ÀŏŚÀýĶŖþğŨÝŋįěğĴ·ųŗŏ¯ŮņĬÏĥŗŲĲţōŢŸćŴâũĦŖœļŽĬŨŸ¾ŀşĠĂı¼¹ĹŖū°ļų¦ď£") 
					{
						breakout = 1;
					}
					else
					{
						tempact = "act1";
					}
				}
				else {
				breakout = 1
				}
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  default: 	
			if(isNaN(chr)){
				
				searcharray = [];	
								
				if (randact == 1)
				{
					searchquote(chr,"act1");
					searchquote(chr,"act2");
					searchquote(chr,"act3");
					searchquote(chr,"act4");
				}
				else
				{
					searchquote(chr,tempact);
				}
				
				if (searcharray.length > 0)
				{
					rint = getRandomInt(searcharray.length);
					quoteno = searcharray[rint][1];
					actno = searcharray[rint][0];
					typequote(actno, quoteno);
				}
				else
				{
					namestyle = "ddlcERRORname";
					textstyle = "ddlcJUSTtext";
					$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">An exception has occurred. Unable to find any quotes matching \""+chr+"\" - Please try another word or phrase.</span></p>");
					
					length = 1;	
				}
				
							
			}
			else
			{
			if (chr > 0)
				{	
					if (randact == 1)
					{
						var tempchrno = 0;
						switch (true) {
							case (chr <= act1cut):
								tempchrno = chr;
								typequote("act1", tempchrno-1);
								break;
							case (chr <= act2cut):
								tempchrno = chr - act1cut;
								typequote("act2", tempchrno-1);
								break;
							case (chr <= act3cut):
								tempchrno = chr - act2cut;
								typequote("act3", tempchrno-1);
								break;
							case (chr <= act4cut):
								tempchrno = chr - act3cut;
								typequote("act4", tempchrno-1);
								break;
							default:
								namestyle = "ddlcERRORname";
								textstyle = "ddlcJUSTtext";
								$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">An exception has occurred. Selected quote is out of range - Please select another number.</span></p>");
								length = 1;	
								break;
						}
					}
					else
					{
						if (chr <= ddlcarray[0][tempact].length && chr > 0)
						{	
							typequote(tempact, chr-1);	
						}
						else
						{
							namestyle = "ddlcERRORname";
							textstyle = "ddlcJUSTtext";
							$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">An exception has occurred. Selected quote is out of range - Please select another number.</span></p>");
							length = 1;	
						}
					}
				}
				else
				{
					namestyle = "ddlcERRORname";
					textstyle = "ddlcJUSTtext";
					$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">An exception has occurred. Unable to retrieve quote - Please try again.</span></p>");
					length = 1;	
				}
			}
		}
	}
	
	window.scrollTo(0,document.body.scrollHeight);
}

function searchquote(chr,searchact) {	
	
	upsearch = chr.toUpperCase();
	if (upsearch.charAt(0) != "/")
	{
		upsearch = "/ " + upsearch;
		upsearch = upsearch + "/ /";
	}
	
	var regtext = new RegExp(/[^A-Za-z0-9 ÉÀ]/g);
	upsearch = upsearch.replace(regtext,"");
	for (j = 0; j < ddlcarray[0][searchact].length; j++) 
	{
		tempstr = ddlcarray[0][searchact][j].toUpperCase();
		var reg = new RegExp(/(<([^>]+)>)/g);
		tempstr = tempstr.replace(reg,"");
		tempstr = tempstr.replace(regtext,"");	
		if (tempstr.includes(upsearch))
		{
			switch (ddlcarray[0][searchact][j].substr(2)) {
			case "Sorry, I'm not in this act...":
			  break;
			case "We dont speak together in this act!":
			  break;
			default:
			  searcharray.push([searchact,j]);
			}
		}
		if (chr.includes(mcvar))
		{
			namesearch = chr
			namesearch = namesearch.replace(mcvar,"MC");
			namesearch = namesearch.toUpperCase();
			namesearch = namesearch.replace(regtext,"");							
			if (tempstr.includes(namesearch))
			{
				searcharray.push([searchact,j]);
			}
		}
		if (chr.includes(crusr))
		{
			namesearch = crusr
			namesearch = namesearch.replace(crusr,"$currentuser");
			namesearch = namesearch.toUpperCase();
			namesearch = namesearch.replace(regtext,"");							
			if (tempstr.includes(namesearch))
			{
				searcharray.push([searchact,j]);
			}
		}
	}
	
	switch(true)
	{
		case (chr == "STwzTkVQ"):
			for (j = 0; j < ddlcarray[0]["EEAB"].length; j++) 
			{
			//I<3NEP*
			searcharray.push(["EENEP",j]);	
			}
		break;
		case (upsearch.includes("AVON")):
			for (j = 0; j < ddlcarray[0]["EEAB"].length; j++) 
			{
			searcharray.push(["EEAB",j]);		
			}
		break;
		case (upsearch.includes("CEASER")):
			for (j = 0; j < ddlcarray[0]["EEC"].length; j++) 
			{
			searcharray.push(["EEC",j]);		
			}
		break;		
		
	}
	
}	
		
function typequote(choiceact, qn){
	var str = ddlcarray[0][choiceact][qn];
	var res = str.charAt(0);
		
		namestyle = "ddlcclassicname";
		textstyle = "ddlcclassictext";
	
		switch (res) {
		  case "S":
			name = "Sayori";
			if (chartextcols == 1)
			{
				namestyle = "ddlcSname";
				textstyle = "ddlcStext";
			}
			break;
		  case "Y":
			name = "Yuri";
			if (chartextcols == 1)
			{
				namestyle = "ddlcYname";
				textstyle = "ddlcYtext";
			}
			break;
		  case "N":
			 name = "Natsuki";
			 if (chartextcols == 1)
			{
				namestyle = "ddlcclassicname";
				textstyle = "ddlcclassictext";
			}
			break;
		  case "M":
			name = "Monika";
			if (chartextcols == 1)
			{
				namestyle = "ddlcMname";
				textstyle = "ddlcMtext";
			}
			break;
		  case "P":
			name = mcvar;
			if (chartextcols == 1)
			{
				namestyle = "ddlcMCname";
				textstyle = "ddlcMCtext";
			}
			break;
		  case "Z":
			name = "Natsuki & Yuri";
			if (chartextcols == 1)
			{
				namestyle = "ddlcNYname";
				textstyle = "ddlcNYtext";
			}
			break;
		  case "-":
			name = ""
			if (chartextcols == 1)
			{
				textstyle = "ddlcJUSTtext";
			}
			break;
		  case "H":
			name = "Neptune"
			if (chartextcols == 1)
			{
				namestyle = "ddlcYname";
				textstyle = "ddlcYtext";
			}
			break;
		  case "A":
			name = "Avon"
			if (chartextcols == 1)
			{
				namestyle = "ddlcORname";
				textstyle = "ddlcORtext";
			}
			break;
		  case "C":
			name = "Ceaser"
			if (chartextcols == 1)
			{
				namestyle = "ddlcBname";
				textstyle = "ddlcBtext";
			}
			break;
				
		}
		
		if (textflip == 1)
		{
			if (namesave != name)
			{
				if (setside == "textl") 
				{
					setside = "textr";
				}
				else
				{
					setside = "textl";
				}
				namesave = name;
			}
		}
		else
		{
			setside = "textl";
		}
		
		var displaytext = ddlcarray[0][choiceact][qn].substr(2)
		var displaytext = displaytext.replace(/\$MC/g, mcvar);
		var displaytext = displaytext.replace(/\$currentuser/g, crusr);
		
		if (name.length > 0) 
		{
			$("#ddlc").append("<p class=\""+setside+"\"><span class=\"ddlcname "+namestyle+"\">" + name +":</span><br><span class=\"ddlctext "+textstyle+"\">\""+ displaytext +"\"</span></p>")
		}
		else
		{
			$("#ddlc").append("<p class=\""+setside+"\"><span class=\"ddlctext "+textstyle+"\">\""+ displaytext +"\"</span></p>")
		}
		lastquote = qn;
		lastact = choiceact;
}		

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//console.log(getRandomInt(3));
// expected output: 0, 1 or 2