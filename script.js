
$(document).ready(function(){

	$("#skillTile").hover(function(){
		$(this).removeClass("skills");
		$(this).addClass("skillsPressed");
	}, 
	function(){
		$(this).addClass("skills");
		$(this).removeClass("skillsPressed");
	});
	
});