var setside = "textr";
var textflip = 1;
var namesave = "START";

var namestyle = "ddlcclassicname";
var textstyle = "ddlcclassictext";

var searcharray = [];	

var mcvar = "MC"

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
			/*quote(selact,"RAND",1);*/
			quote(selact,inSearch.value,1);
			/*quote(V1,V2,V3);
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
			quote("3","dave",5);
			quote("A","TEST",5);
			quote("1","poem",5);
			quote("A","error",5);
			quote("A","TkVQ",10);*/
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
			if (textflip == 1)
			{
				textflip = 0;					
				fbtn.className = "inner ddlcJUSTtext";	
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
				textcolbtn.className = "inner ddlcJUSTtext";	
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
						lastact = "actP";
						lastquote = 0;
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
					break;
				  case "We dont speak together in this act!":
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
			    breakout = 1
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
					if (chr == "TkVQ")
					{
						namestyle = "ddlcYname"
						textstyle = "ddlcYtext";
						neptext = "";
						neprandquote = getRandomInt(5);
						switch (neprandquote) {
						  case 0:
							neptext = "Nep, Nep Nep Nep Nep Nep Nep, Nep Nep.";
							break;
						  case 1:
							neptext = "I'll Nep your face!";
							break;
						  case 2:
							neptext = "A wild Neptune appears!";
							break;
						  case 3:
							neptext = "Puddiiiiiiiiing! If I don't have any pudding, I'll die! Puddiiiiing!";
							break;
						  case 4:
							neptext = "Hey, wait a sec... this isn't my game...";
						}
						$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">Neptune:</span><br><span class=\"ddlctext "+textstyle+"\">\""+neptext+"\"</span></p>");
					}
					else
					{
					namestyle = "ddlcERRORname";
					textstyle = "ddlcJUSTtext";
					$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Unable to find any quotes matching \""+chr+"\" - Please try another word or phrase.\"</span></p>");
					}
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
								$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Selected quote is out of range - Please select another number.\"</span></p>");
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
							$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Selected quote is out of range - Please select another number.\"</span></p>");
							length = 1;	
						}
					}
				}
				else
				{
					namestyle = "ddlcERRORname";
					textstyle = "ddlcJUSTtext";
					$("#ddlc").append("<p class=\"textc\"><span class=\"ddlcname "+namestyle+"\">ERROR:</span><br><span class=\"ddlctext "+textstyle+"\">\"An exception has occurred. Selected quote is out of range - Please select another number.\"</span></p>");
					length = 1;	
				}
			}
		}
	}
	
	window.scrollTo(0,document.body.scrollHeight);
}

function searchquote(chr,searchact) {
	
	upsearch = chr.toUpperCase();
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