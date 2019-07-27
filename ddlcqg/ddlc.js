var setside = "textr";
var textflip = 1;
var namesave = "START";

var namestyle = "ddlcclassicname";
var textstyle = "ddlcclassictext";

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
		var fbox = document.getElementById("flipBtnBox");	
		fbox.checked = true;	
			
		var a = document.getElementById("genDDLC");
		a.onclick = function(){
			document.getElementById("bg").className = "cutopacity";
			quote("2","S",1);
			quote("2","Y",1);
			quote("2","N",1);
			quote("2","M",1);
			quote("2","MC",1);
			quote("2","NY",1);
			quote("2","TXT",1);
			quote("2","RAND",1);
			quote("2","ORD",2);
			quote("1",96,1);
			quote("1",9999996,1);
			quote("A",9999996,1);
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
				
		
		fbtn.onclick = function() {
			//fbox.click;
			//return false;
			if (textflip == 1)
			{
				textflip = 0;
				fbox.checked = false;					
			}
			else
			{
				textflip = 1;	
				namesave = "START";	
				fbox.checked = true;					
			}
		}
		fbox.onclick = function() {
			if (textflip == 1)
			{
				textflip = 0;	
			}
			else
			{
				textflip = 1;	
				namesave = "START";				
			}
		}
		
	});
	
});

function quote(act, chr, length) {	
	var i;
	var tempact;
	var randact = 0;
	var quoteno;
	var inord = 0;
	
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
	  case "P":
		tempact = "actP";
	}
	
	for (i = 0; i < length; i++) {	
		if (randact == 1) {
			var intact = getRandomInt(14)+1;
			switch (true) {
				case (intact < 4):
					//less than 4
					tempact = "act1";
					break;
				case (intact < 7):
					//between 4 and 6
					tempact = "act2";
					break;
				case (intact < 10):
					//between 7 and 9
					tempact = "act3";
					break;
				case (intact < 13):
					//between 10 and 12
					tempact = "act4";
					break;
				case (intact < 15):
					//between 13 and 14
					tempact = "actP";
					break;
				default:
					break;
			}	
		}	
			
		switch (chr) {
		  case "RAND":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  
				switch (ddlcarray[0][tempact][quoteno].substr(2)) {
				  case "Sorry, I'm not in this act...":
					break;
				  case "We dont speak together in this act!":
					break;
				  case "Sorry, my poems weren't good enough to appear in the game...":
					break;
				  case "We didn't write any poems together!":
					break;
				  case "Sorry, I'm just the narrator, I didn't write any poems!":
					break;
				  default:
				    breakout = 1;
				}
			  
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
		  case "S":
 		    do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "S") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Sorry, I'm not in this act...") 
					{
						breakout = 1
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
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "Y") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Sorry, I'm not in this act...") 
					{
						breakout = 1
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
		    do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "N") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Sorry, I'm not in this act...") 
					{
						breakout = 1
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
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "M") { 
				breakout = 1
			  };
			}
			while (breakout < 1);
			typequote(tempact, quoteno);
			break;
			case "NY":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "Z") { 
			    if (randact == 1) {
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {
					  case "We dont speak together in this act!":
						break;
					  case "We didn't write any poems together!":
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
			case "MC":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "P") { 
			    if (randact == 1) {
					switch (ddlcarray[0][tempact][quoteno].substr(2)) {
					  case "Sorry, I'm not in this act...":
						break;
					  case "Sorry, my poems weren't good enough to appear in the game...":
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
			case "TXT":
			do {
			  var breakout = 0;
			  quoteno = getRandomInt(ddlcarray[0][tempact].length);
			  var str = ddlcarray[0][tempact][quoteno];
			  var res = str.charAt(0);
			  if (res == "-") { 
			    if (randact == 1) {
					if (ddlcarray[0][tempact][quoteno].substr(2) != "Sorry, I'm just the narrator, I didn't write any poems!") 
					{
						breakout = 1
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
		  case "ORD":
			inord = 1;
			break;
		  default: 		   
			if (chr > 0)
			{	
				if (randact == 1)
				{
					var act1cut = ddlcarray[0].act1.length;
					var act2cut = act1cut + ddlcarray[0].act2.length;
					var act3cut = act2cut + ddlcarray[0].act3.length;
					var act4cut = act3cut + ddlcarray[0].act4.length;
					var actPcut = act4cut + ddlcarray[0].actP.length;
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
						case (chr <= actPcut):
							tempchrno = chr - act4cut;
							typequote("actP", tempchrno-1);
							break;
						default:
							namestyle = "ddlcERRORname";
							textstyle = "ddlcJUSTtext";
							$("#ddlc").append("<p class=\"textl\"><span class=\"ddlcname "+namestyle+"\">ERROR1:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Selected quote is out of range - Please select another number.\"</span></p>");
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
						$("#ddlc").append("<p class=\"textl\"><span class=\"ddlcname "+namestyle+"\">ERROR2:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Selected quote is out of range - Please select another number.\"</span></p>");
					}
				}
			}
		}
				
	}

	if (inord == 1) 
    {
		do {
		  var breakout = 0;
		  quoteno = getRandomInt(ddlcarray[0][tempact].length - (length-1));
			  
			switch (ddlcarray[0][tempact][quoteno].substr(2)) {
			case "Sorry, I'm not in this act...":
			  break;
			case "We dont speak together in this act!":
			  break;
			case "Sorry, my poems weren't good enough to appear in the game...":
			  break;
			case "We didn't write any poems together!":
			  break;
			case "Sorry, I'm just the narrator, I didn't write any poems!":
			  break;
			default:
			  breakout = 1;
			}   
		}
		while (breakout < 1);
			
		for (i = 0; i < length; i++) {
			typequote(tempact, quoteno + i);
		}
	
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
			name = "MC";
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
		
		if (name.length > 0) 
			$("#ddlc").append("<p class=\""+setside+"\"><span class=\"ddlcname "+namestyle+"\">" + name +":</span><br><span class=\"ddlctext "+textstyle+"\">\""+ ddlcarray[0][choiceact][qn].substr(2) +"\"</span></p>")
		else
			$("#ddlc").append("<p class=\""+setside+"\"><span class=\"ddlctext "+textstyle+"\">\""+ ddlcarray[0][choiceact][qn].substr(2) +"\"</span></p>")
		
		window.scrollTo(0,document.body.scrollHeight);
}		

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//console.log(getRandomInt(3));
// expected output: 0, 1 or 2