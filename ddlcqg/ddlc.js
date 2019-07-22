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
			
		var a = document.getElementById("genDDLC");
		a.onclick = function() {
			var qn = getRandomInt(ddlcarray[0].text.length)	
			
			var str = ddlcarray[0].text[qn];
			var res = str.charAt(0);
			
			switch (res) {
			  case "S":
				name = "Sayori";
				break;
			  case "Y":
				name = "Yuri";
				break;
			  case "N":
				 name = "Natsuki";
				break;
			  case "M":
				name = "Monika";
				break;
			  case "P":
				name = "MC";
				break;
			  case "NY":
				name = "Natsuki & Yuri";
				break;
			  case "-":
			    name = ""
			}
			
			if (name.length > 0) 
				$("#ddlc").append("<p><span>" + name +":<span><br>\""+ ddlcarray[0].text[qn].substr(2) +"\"</p>")
			else
				$("#ddlc").append("<p>"+ ddlcarray[0].text[qn].substr(2) +"</p>")
			
			window.scrollTo(0,document.body.scrollHeight);
							
		return false;
		}
		
		var a = document.getElementById("clearDDLC");
		a.onclick = function() {
			$("#ddlc").html("")		
		return false;
		}

	});
	
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//console.log(getRandomInt(3));
// expected output: 0, 1 or 2