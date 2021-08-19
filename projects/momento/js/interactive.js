let $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	$(".menu-mobile__sidebar").toggleClass("flex");
});