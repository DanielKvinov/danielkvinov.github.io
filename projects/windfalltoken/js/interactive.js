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

$("document").ready(function(){
	// 100vh and chrome toolbar fix
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
