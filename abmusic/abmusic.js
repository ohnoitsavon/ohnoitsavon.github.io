var musicSwitch = 1; 
var imgCutpointsMusic = 6;
var imgCountMusic = 0;
var totalMusicCount = 0;

var viewportWidth = 1920;
var viewportHeight = 1080;

var abmusicarray = [];	
	
//return data
$.getJSON("music.json", function(data) {

	if (data == null) {
		//wrapper.html('No tweets available.');
		return false;
	}
		
	$.each(data.data, function(i, field) {
		abmusicarray.push(field);
	});	
		
		
}).fail(function(jqxhr, textStatus, error) {
	//wrapper.html('No tweets available');
	console.log(error);
}).then(function(){

	
	$(document).ready(function() {
			
		$('#abmusic').html("<div id=\"musicCont\"><div id=\"musicInnerCont\"><div id=\"abMusicGal\"></div></div><p class=\"musicBtnCont\"><a class=\"musicBtn\" href=\"#\">More...</a></p></div></div>");	
		
		totalMusicCount = abmusicarray.length;
		
		if (imgCutpointsMusic > abmusicarray.length) {
			imgCountMusic = abmusicarray.length;
		} else {
			imgCountMusic = imgCutpointsMusic;
		}
		
		
		
		for (i = 1; i <= imgCountMusic; i++) { 
		
		$("#abMusicGal").append( "<div class=\"abAlbum\"><a style=\"background: "+ abmusicarray[i-1].col +"\"class=\"abalbumlink\" href=\"#\"><div class=\"hovertext\"><img src=\""+ abmusicarray[i-1].image +"\"/><div>"+ abmusicarray[i-1].name +"<br><br><span>"+ abmusicarray[i-1].date +"</span></div></div></a></div>");	
			
					
		}
		
		$('#abmusic').waitForImages(function() {
			// All descendant images have loaded, now slide up.
			SetAlbumImgHeight(musicSwitch);	
		});
			
		
		
		$('.musicBtn').click(function (event) {
			event.preventDefault();
		
			musicSwitch = musicSwitch + 1;
			imgCountMusic = imgCutpointsMusic * musicSwitch;
			var imgcprev = imgCutpointsMusic * (musicSwitch - 1); 
			
			for (i = imgcprev + 1; i <= imgCountMusic; i++) { 
		
				if (i <= abmusicarray.length) {
					$("#abMusicGal").append( "<div class=\"abAlbum\"><a style=\"background: "+ abmusicarray[i-1].col +"\"class=\"abalbumlink\" href=\"#\"><div class=\"hovertext\"><img src=\""+ abmusicarray[i-1].image +"\"/><div>"+ abmusicarray[i-1].name +"<br><br><span>"+ abmusicarray[i-1].date +"</span></div></div></a></div>");			
				}
			
			}
			
			$('#abmusic').waitForImages(function() {
				// All descendant images have loaded, now slide up.
				SetAlbumImgHeight(musicSwitch);	
			});
			
			SetAlbumImgHeight(musicSwitch);
			
			$('.abalbumlink').click(function (event) {
				event.preventDefault();
				/*console.log($(this).parent().prevAll().length);*/
				LoadAlbum($(this).parent().prevAll().length);
			});
		
		});	
		
		$('.abalbumlink').click(function (event) {
			event.preventDefault();
			/*console.log($(this).parent().prevAll().length);*/
			LoadAlbum($(this).parent().prevAll().length);
		});
	
	});
		

	$(window).resize(function () {

		SetAlbumImgHeight(musicSwitch);
		
		viewportWidth = $(window).width();
		viewportHeight = $(window).height();
		
		if ($(".albuminner").height() >= viewportHeight || $(".albuminner").width() >= viewportWidth) 
		{
			$('.albumimg').css("background-size", "contain");  
		}
		else
		{
			$('.albumimg').css("background-size", "auto");  
		}
				
	});

	function LoadAlbum (position) {
		
		
		var lbimg;
				
		viewportWidth = $(window).width();
		viewportHeight = $(window).height();
		
		ablinks = "";
		abtracks = "";
		
		if (abmusicarray[position].bclink != "") {
			ablinks = ablinks + "<div class=\"ablinks\"><a class=\"bandcamp\" target=\"_blank\" href=\""+abmusicarray[position].bclink+"\"><i class=\"fa-brands fa-bandcamp\"></i><span>Bandcamp</span></a></div>";
		}
		
		if (abmusicarray[position].splink != "") {
			ablinks = ablinks + "<div class=\"ablinks\"><a class=\"spotify\" target=\"_blank\" href=\""+abmusicarray[position].splink+"\"><i class=\"fa-brands fa-spotify\"></i><span>Spotify</span></a></div>";
		}
		if (abmusicarray[position].amlink != "") {
			ablinks = ablinks + "<div class=\"ablinks\"><a class=\"applemusic\" target=\"_blank\" href=\""+abmusicarray[position].amlink+"\"><i class=\"fa-brands fa-itunes\"></i><span>Apple Music</span></a></div>";
		}			
		
		for (i = 1; i <= abmusicarray[position].tracks.length; i++) { 
			console.log(abmusicarray[position].tracks[i-1])
			abtracks = abtracks + i + ". " +abmusicarray[position].tracks[i-1].tname + "<br>";
			
					
		}
		
		lbimg = $("<div class=\"albumimg\"><div class=\"closeImg\" style=\"width:100vw; height:100vh; z-index:-1;\"></div><a class=\"closeImg\" href=\"#\"><i class=\"fa fa-times\"></i></a><div class=\"fullinfo\"><div class=\"albuminner\"><div class=\"albumtitle2\">"+ abmusicarray[position].name + "<br><span class=\"date1\">" + abmusicarray[position].date + "</span><br><br></div><img src=\""+ abmusicarray[position].image +"\"/><div class=\"textfs\"><div class=\"albumtitle1\">"+ abmusicarray[position].name + "<br><span class=\"date1\">" + abmusicarray[position].date + "</span><br><br></div><span class=\"tracklist\">"+abtracks+"</span><br><div class=\"linkcont\">"+ablinks+"</div></div></div></div>").prependTo("body");
		/*$('.albumimg').css("background-image", "url(\""+ abmusicarray[position].image +"\")"); 

		if ($(".albuminner").height() >= viewportHeight || $(".albuminner").width() >= viewportWidth) 
		{
			$('.albumimg').css("background-size", "contain");  
		}
		else
		{
			$('.albumimg').css("background-size", "auto");  
		}*/

		$('.closeImg').click(function (event) {
			event.preventDefault();
			console.log(lbimg);
			lbimg.remove();
		});
		

		
	};
	
	
	function SetAlbumImgHeight(a){
		
		
		
		if (a * imgCutpointsMusic >= abmusicarray.length) {
			
			$('.musicBtnCont').hide();
			$("#musicInnerCont").css({
				'overflow' : 'auto',
				'height' : 'auto'
			});
		}
		
		
		
	}

});