$(document).ready(function(){

	$(".projects-list__cell").click(function(){
		$(".projects-cell").toggleClass("projects-cell__open");
	});

	// Кастомный скроллбар
	$("body").mCustomScrollbar({
		theme: "light-3",
	});

});