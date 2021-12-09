let $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	// $(".menu-mobile__nav").slideToggle();
	$(".menu-mobile__nav").toggleClass("mobile-menu__visible");
	$("body, .windfall-background").toggleClass("overflow-hidden");
});
$(".menu-mobile__nav-container a").click(function(){
	$hamburger.toggleClass("is-active");
	$(".menu-mobile__nav").toggleClass("mobile-menu__visible");
	$("body, .windfall-background").toggleClass("overflow-hidden");
});
