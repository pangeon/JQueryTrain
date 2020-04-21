$(document).ready(function () {
	var container = $('#container');
	container.append('<marquee>Agnieszka jest urocza</marquee>')
	.prepend('<marquee direction="right"><img src="img/agnieszka.png" /></marquee>');
	
	$('marquee').addClass("emphasise");
	container.wrap('<div class="rect" />');
	
	$('.toRemove').remove();
});