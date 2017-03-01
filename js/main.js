var button_main = document.querySelector ("header .menu-button");
/*var button_footer = document.querySelector (".footer-nav .menu-button");*/
var main_nav = document.querySelector (".main-nav");
/*var footer_nav = document.querySelector (".footer-nav ul");*/

button_main.addEventListener("click", function(event) {
	event.preventDefault();
	main_nav.classList.toggle("collapse-in");
});

/*button_footer.addEventListener("click", function(event) {
	event.preventDefault();
	footer_nav.classList.toggle("collapse-in");
});*/